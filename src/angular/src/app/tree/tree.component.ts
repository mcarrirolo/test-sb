import {
    Component,
    OnInit,
    ViewChild,
    Input,
    Output,
    AfterViewInit,
} from '@angular/core';
import {
    ArrayDataSource
} from '@angular/cdk/collections';
import {
    NestedTreeControl
} from '@angular/cdk/tree';
import {
    MatTree
} from '@angular/material';
import {
    platformCoreDynamicTesting
} from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';
import {
    HttpClient
} from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit{

    VOID_DATA: Node[] = [];
    TREE_DATA: Node[] = [];
    treeControl = new NestedTreeControl < Node > (node => node.childNode);
    dataSource = new ArrayDataSource(this.TREE_DATA);

    @ViewChild('tree') tree;

    constructor(private http: HttpClient) {}
    
    platform = '';
    container = '';
    agents :string[] = [];

    selected = '';
    @Output() emitter = new EventEmitter<string>();

    ngOnInit() {
        this.populateTree();
    }

    focus(selected_ :string) :void{
        this.selected = selected_;
        // any time there is a click on the tree, the event is sent to parent component
        this.emitter.emit(this.selected);
        // FIXME: also on every click the tree is updated
    }


    private populateTree() :void{
        this.http.get('http://localhost:2020/containerName', {
            responseType: 'text'
        }).subscribe(data => {this.container = data; console.log(this.container);

            this.http.get('http://localhost:2020/platformName', {
            responseType: 'text'
            }).subscribe(data => {this.platform = data; console.log(this.platform);

                this.http.get('http://localhost:2020/agentsName').subscribe(data => {console.log(data); console.log(typeof data);

                
                    let agentlist: Node[] = [];
                    for(let i in data) {
                        this.agents.push(data[i]);
                        let ag = new Node(this.agents[i]);
                        agentlist.push(ag);
                    }
                    let maincontainer: Node[] = [{
                        name: this.container,
                        childNode: agentlist
                    }];
                    let ip: Node[] = [{
                        name: this.platform,
                        childNode: maincontainer
                    }];
                    this.TREE_DATA.push({
                        name: 'Agent Platforms',
                        childNode: ip
                    });
                    this.tree.renderNodeChanges(this.TREE_DATA);

                });
            });
        });

    }

    addContainer(): void {

        // METODO DI PROVA PER VERIFICARE LA POSSIBILITA DI AGGIORNARE L'ALBERO

        let agentlist: Node[] = [{
            name: '3'
        }, {
            name: '4'
        }];
        let newcontainer: Node = {
            name: 'Second Container',
            childNode: agentlist
        };
        this.TREE_DATA[0].childNode[0].childNode.push(newcontainer);
        // rendering VOID_DATA is necessary to actually render the modified TREE_DATA
        this.tree.renderNodeChanges(this.VOID_DATA);
        this.tree.renderNodeChanges(this.TREE_DATA);
        console.log(this.TREE_DATA);

    }


    hasChild = (_: number, node: Node) => !!node.childNode && node.childNode.length > 0;

}

class Node {

    name: string = '';
    childNode ? : Node[];

    constructor(name_, childnode_?){
        this.name = name_;
        this.childNode = childnode_;
    }

}