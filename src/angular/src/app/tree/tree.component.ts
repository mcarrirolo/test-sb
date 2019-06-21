import {
    Component,
    OnInit,
    ViewChild,
    Injectable,
} from '@angular/core';
import {
    ArrayDataSource
} from '@angular/cdk/collections';
import {
    NestedTreeControl
} from '@angular/cdk/tree';

import {
    DataTransferService
} from '../data-transfer.service';
import { Node } from '../data-transfer.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

    VOID_DATA: Node[] = [];
    
    treeControl = new NestedTreeControl < Node > (node => node.childNode);
    dataSource = new ArrayDataSource(this.dataService.TREE_DATA);
    status: boolean;


    @ViewChild('tree') tree;

    constructor(private dataService: DataTransferService, private http: HttpClient) {
    }

    selected: string = "";
    interval: any;

    ngOnInit() {
        this.dataService.getTree().then(
            protoTree => {
                this.tree.renderNodeChanges(protoTree);
            }
        );
        this.dataService.refreshStatus.subscribe(status => {
            if (status == true) {
                this.tree.renderNodeChanges(this.VOID_DATA);
                this.tree.renderNodeChanges(this.dataService.TREE_DATA);
            } 
        });
        this.interval = setInterval(() => { 
            this.dataService.updateFromRemote(); 
        }, 1000);
    }

    focus(selected_: string): void {
        this.selected = selected_;
        // any time there is a click on the tree, the selected element is stored in a DataTransferService
        this.dataService.selection = selected_;
    }

    addContainer(): void {
        // METODO DI PROVA PER VERIFICARE LA POSSIBILITA DI AGGIORNARE L'ALBERO
        // let agentlist: Node[] = [{
        //     name: '3'
        // }, {
        //     name: '4'
        // }];
        // let newcontainer: Node = {
        //     name: 'Second Container',
        //     childNode: agentlist
        // };
        // this.dataService.TREE_DATA[0].childNode[0].childNode.push(newcontainer);
    }
    
    hasChild = (_: number, node: Node) => !!node.childNode && node.childNode.length > 0;
}

