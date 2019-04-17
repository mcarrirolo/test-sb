import {
    Component,
    OnInit,
    ViewChild,
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

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

    VOID_DATA: Node[] = [];
    TREE_DATA: Node[] = [];
    treeControl = new NestedTreeControl < Node > (node => node.childNode);
    dataSource = new ArrayDataSource(this.TREE_DATA);

    @ViewChild('tree') tree;

    name = '';

    constructor(private http: HttpClient) {}

    ngOnInit() {

        let agentlist: Node[] = [{
            name: '1'
        }, {
            name: '2'
        }];
        let maincontainer: Node[] = [{
            name: 'MainContainer',
            childNode: agentlist
        }];
        let ip: Node[] = [{
            name: '192.168.x.y',
            childNode: maincontainer
        }];
        this.TREE_DATA.push({
            name: 'Agent Platforms',
            childNode: ip
        });



    }


    // private platformName() :any{
    //     this.http.get('http://localhost:2020/platformName', {
    //         responseType: 'text'
    //     }).subscribe(data => {this.name = data; console.log(this.name); return this.name;});

    // }


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

}