import { Injectable } from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

/**
 * 
 * This class keeps track of the selected node in the tree,
 * get the updates for the tree, and share this data with all the other components
 * 
 * @author Matteo Carrirolo
 * 
 */

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
    public getTree() :Promise<Node[]>{
        let platform = '';

        return this.http.get('http://localhost:2020/platformName', {
            responseType: 'text'
        }).toPromise().then(data => {
            platform = data;

            this.ip = platform;
            this.TREE_DATA.push(new Node("Agent Platforms"));
            this.TREE_DATA[0].childNode.push(new Node(this.ip));
            console.log(this.TREE_DATA);
            return this.TREE_DATA;
        });
    }

    // public remove(): void{
    //     var n = 0;
    //     this.TREE_DATA.forEach(node => {
    //         node.childNode.forEach(subnode => {
    //             subnode.childNode.forEach(subsubnode => {
    //                 subsubnode.childNode.forEach(subsubsubnode =>{
    //                     if(subsubsubnode.name == this.selection){
    //                         subsubnode.childNode.splice(n,1);
    //                     }
    //                     n++;
    //                 })
    //             });
    //         });
    //     });
    //     this.changeRefreshStatus(true);
    // }

    // public add(name: string, container: string): void{
    //     var existing = false;
    //     this.TREE_DATA.forEach(node => {
    //         node.childNode.forEach(subnode => {
    //             subnode.childNode.forEach(subsubnode => {
    //                 if(subsubnode.name == container){
    //                     subsubnode.childNode.forEach(subsubsubnode =>{
    //                         if(subsubsubnode.name.indexOf(name) !== -1){
    //                             existing = true;
    //                         }
    //                     })
    //                     if(existing == false){
    //                         subsubnode.childNode.push(new Node(name + '@' + this.ip));
    //                     }
    //                 }
    //             });
    //         });
    //     });
    //     this.changeRefreshStatus(true);
    // }

    public updateFromRemote(): void{
        this.http.get('http://localhost:2020/update').subscribe(data => {

            console.log(data);

            var name: string = '';
            var container: string = '';
            var state: string = '';
            var ip: string = '';
            
            name = data[0]
            container = data[1];
            state = data[2];
            ip = data[3];
            
            this.ready = true;
            if((this.name != name || this.container != container || this.state != state) && this.ready == true){
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
                                        console.log(subsubsubnode.name);
                                        console.log(subsubnode.childNode.splice(n,1));
                                        console.log(n);
                                    }
                                    n++;
                                })
                                n = 0;
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
