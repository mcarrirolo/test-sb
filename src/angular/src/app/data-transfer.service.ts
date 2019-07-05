import { Injectable } from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class DataTransferService{

    constructor(private http: HttpClient){}

    // selected node name
    selection: string = '';

    // last agent that changed status
    ready: boolean = false;
    name: string = '';
    container: string = '';
    state: string = '';
    ip: string = '';
    remote: boolean = false;
    apd: string[] = [];

    TREE_DATA: Node[] = [];

    public needRefresh = new BehaviorSubject(false);
    refreshStatus = this.needRefresh.asObservable();

    changeRefreshStatus(tf: boolean) {
        this.needRefresh.next(tf);
    }

    // Retrive the initial tree, shouldn't be used after initialization
    // Add or remove nodes from TREE_DATA using updateFromRemote()
    // instead
    public getTree() :Promise<Node[]>{
        let platform = '';
        let container = '';
        let agents: string[] = [];

        return this.http.get('http://localhost:2020/containerName', {
            responseType: 'text'
        }).toPromise().then(data => {
            container = data;

            return this.http.get('http://localhost:2020/platformName', {
                responseType: 'text'
            }).toPromise().then(data => {
                platform = data;
                this.ip = platform;

                return this.http.get('http://localhost:2020/agentsName').toPromise().then(data => {
                    let agentlist: Node[] = [];
                    for (let i in data) {
                        agents.push(data[i]);
                        let ag = new Node(agents[i]);
                        agentlist.push(ag);
                    }
                    let maincontainer: Node[] = [{
                        name: container,
                        childNode: agentlist
                    }];
                    let ip: Node[] = [{
                        name: platform,
                        childNode: maincontainer
                    }];
                    this.TREE_DATA.push({
                        name: 'Agent Platforms',
                        childNode: ip
                    });
                    console.log(this.TREE_DATA);
                    return this.TREE_DATA;
                });
            });
        });
    }

    public remove(): void{
        var n = 0;
        this.TREE_DATA.forEach(node => {
            node.childNode.forEach(subnode => {
                subnode.childNode.forEach(subsubnode => {
                    subsubnode.childNode.forEach(subsubsubnode =>{
                        if(subsubsubnode.name == this.selection){
                            subsubnode.childNode.splice(n,1);
                        }
                        n++;
                    })
                });
            });
        });
        this.changeRefreshStatus(true);
    }

    public add(name: string, container: string): void{
        var existing = false;
        this.TREE_DATA.forEach(node => {
            node.childNode.forEach(subnode => {
                subnode.childNode.forEach(subsubnode => {
                    if(subsubnode.name == container){
                        subsubnode.childNode.forEach(subsubsubnode =>{
                            if(subsubsubnode.name.indexOf(name) !== -1){
                                existing = true;
                            }
                        })
                        if(existing == false){
                            subsubnode.childNode.push(new Node(name + '@' + this.ip));
                        }
                    }
                });
            });
        });
        this.changeRefreshStatus(true);
    }

    public updateFromRemote(): void{
        this.http.get('http://localhost:2020/update').subscribe(data => {

            var name: string = '';
            var container: string = '';
            var state: string = '';
            var ip: string = '';
            
            name = data[0]
            container = data[1];
            state = data[2];
            ip = data[3];
            
            if(name == "" && container == "" && state == "" && this.ready == false){
                this.name = name;
                this.container = container;
                this.state = state;
                this.ready = true;
                console.log("Ready -> " + true);
            }
            else if((this.name != name || this.container != container || this.state != state) && this.ready == true){
                if(state == "added"){
                    // Agent added
                    if(name != ""){
                        this.TREE_DATA.forEach(node => {
                            node.childNode.forEach(subnode => {
                                subnode.childNode.forEach(subsubnode => {
                                    if(subsubnode.name == container){
                                        subsubnode.childNode.push(new Node(name));
                                    }
                                });
                            });
                        });
                    }
                    // Container added
                    else if(ip !== ""){
                        this.TREE_DATA.forEach(node => {
                            node.childNode.forEach(subnode => {
                                if(subnode.name.indexOf(ip) !== -1){
                                    subnode.childNode.push(new Node(container));
                                }
                            });
                        });
                    }
                    // Remote platforms added
                    else if(ip === "" && this.remote === false){
                        this.remote = true;
                        this.TREE_DATA.forEach(node => {
                            node.childNode.push(new Node(container));
                        });
                    }
                }
                if(state == "removed"){
                    var n = 0;
                    this.TREE_DATA.forEach(node => {
                        node.childNode.forEach(subnode => {
                            subnode.childNode.forEach(subsubnode => {
                                    subsubnode.childNode.forEach(subsubsubnode =>{
                                        if(subsubsubnode.name == name){
                                            subsubnode.childNode.splice(n,1);
                                        }
                                        n++;
                                    })
                            });
                        });
                    });
                }
                this.name = name;
                this.container = container;
                this.state = state;
                this.changeRefreshStatus(true);
            }
        })
    }

}

export class Node {
    name: string = null;
    childNode: Node[] = [];
    constructor(name_, childnode_? ) {
        this.name = name_;
        this.childNode = childnode_;
        this.childNode = [];
    }
}
