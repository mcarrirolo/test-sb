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
    first: boolean = true;
    name: string = '';
    container: string = '';
    state: string = '';
    ip: string = '';

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
        var i = 0;
        var j = 0;
        var m = 0;
        var n = 0;
        this.TREE_DATA.forEach(node => {
            this.TREE_DATA[i].childNode.forEach(subnode => {
                this.TREE_DATA[i].childNode[j].childNode.forEach(subsubnode => {
                    this.TREE_DATA[i].childNode[j].childNode[m].childNode.forEach(subsubsubnode =>{
                        if(subsubsubnode.name == this.selection){
                            this.TREE_DATA[i].childNode[j].childNode[m].childNode.splice(n,1);
                        }
                        n++;
                    })
                    m++;
                });
                j++;
            });
            i++;
        });
    }

    public add(name: string, container: string): void{
        var i = 0;
        var j = 0;
        var m = 0;
        var existing = false;
        this.TREE_DATA.forEach(node => {
            this.TREE_DATA[i].childNode.forEach(subnode => {
                this.TREE_DATA[i].childNode[j].childNode.forEach(subsubnode => {
                    if(subsubnode.name == container){
                        this.TREE_DATA[i].childNode[j].childNode[m].childNode.forEach(subsubsubnode =>{
                            if(subsubsubnode.name.indexOf(name) !== -1){
                                existing = true;
                            }
                        })
                        if(existing == false){
                            this.TREE_DATA[i].childNode[j].childNode[m].childNode.push(new Node(name + '@' + this.ip));
                        }
                    }
                });
                m++;
            });
            j++;
        });
        i++;
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
            
            if(this.first == true){
                this.name = name;
                this.container = container;
                this.state = state;
                this.first = false;
            }
            else if((this.name != name || this.container != container || this.state != state)){
                if(state == "addedd"){
                    // Agent added
                    if(name != ""){
                        var i = 0;
                        var j = 0;
                        var m = 0;
                        this.TREE_DATA.forEach(node => {
                            this.TREE_DATA[i].childNode.forEach(subnode => {
                                this.TREE_DATA[i].childNode[j].childNode.forEach(subsubnode => {
                                    if(subsubnode.name == container){
                                        this.TREE_DATA[i].childNode[j].childNode[m].childNode.push(new Node(name));
                                    }
                                    m++;
                                });
                                j++;
                            });
                            i++;
                        });
                    }
                    // Container added
                    else{
                        var i = 0;
                        var j = 0;
                        this.TREE_DATA.forEach(node => {
                            this.TREE_DATA[i].childNode.forEach(subnode => {
                                if(subnode.name.indexOf(ip) !== -1){
                                    this.TREE_DATA[i].childNode[j].childNode.push(new Node(container));
                                }
                                j++;
                            });
                            i++;
                        });
                    }
                }
                if(state == "removed"){
                    var i = 0;
                    var j = 0;
                    var m = 0;
                    var n = 0;
                    this.TREE_DATA.forEach(node => {
                        this.TREE_DATA[i].childNode.forEach(subnode => {
                            this.TREE_DATA[i].childNode[j].childNode.forEach(subsubnode => {
                                this.TREE_DATA[i].childNode[j].childNode[m].childNode.forEach(subsubsubnode =>{
                                    if(subsubsubnode.name == name){
                                        this.TREE_DATA[i].childNode[j].childNode[m].childNode.splice(n,1);
                                    }
                                    n++;
                                })
                                m++;
                            });
                            j++;
                        });
                        i++;
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
    name: string = '';
    childNode ? : Node[];
    constructor(name_, childnode_ ? ) {
        this.name = name_;
        this.childNode = childnode_;
    }
}
