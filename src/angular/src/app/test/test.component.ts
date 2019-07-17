import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute
} from '@angular/router';
import {
    DataTransferService
} from '../data-transfer.service';
import {
    MatSnackBar
} from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { interval } from 'rxjs';
import {
    ArrayDataSource
} from '@angular/cdk/collections';
import {
    NestedTreeControl
} from '@angular/cdk/tree';

/**
 * 
 * This class manages every tool
 * (Sniffer, Dummy, Log, Introspector)
 * 
 * @author Matteo Carrirolo
 * 
 */

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit, OnDestroy{

    constructor(private route: ActivatedRoute, private dataService: DataTransferService, private snackBar: MatSnackBar, private http: HttpClient) {}

    isSniffer = false;
    isDummy = false;
    isIntrospector = false;
    isLog = false;

    timer: any;
    subscription: any;
    sniffed: string[] = [];
    showed: string[] = [];

    sniffing: boolean = false;
    logging: boolean = false;
    debugging: boolean = false;

    sender: string;
    receiver: string;
    commtype: number = 7;
    content: string;
    ontology: string;
    language: string = "fipa-sl0";
    protocol: string;
    conversation: string;
    repto: string;
    repw: string;
    encoding: string;

    snifferMsgList: Message[] = [];
    dummyMsgList: Message[] = [];
    logs: Log[] = [];
    behaviours: Behaviour[] = [];
    sentMsgList: Message[] = [];
    receivedMsgList: Message[] = [];
    postedMsgList: Message[] = [];

    debugged: string;
    selected: string;
    class: string;
    kind: string;
    state: string;
    detail: boolean = false;
    VOID_DATA: Behaviour[] = [];
    
    treeControl = new NestedTreeControl < Behaviour > (b => b.allChildren);
    dataSource = new ArrayDataSource(this.behaviours);

    @ViewChild('tree') tree;

    hasChild = (_: number, b: Behaviour) => !!b.allChildren && b.allChildren.length > 0;

    focus(selected_: string): void {
        // FIXME: does work only for <= 3 level subBehaviour
        this.behaviours.forEach(b => {
            if(!b.simple){
                b.allChildren.forEach(bb => {
                    if(!bb.simple){
                        bb.allChildren.forEach(bbb => {
                            if(bbb.name === selected_){
                                this.selected = selected_;
                                this.class = bbb.className;
                                this.kind = bbb.kind;
                            }
                        });
                    }
                    if(bb.name === selected_){
                        this.selected = selected_;
                        this.class = bb.className;
                        this.kind = bb.kind;
                    }
                });
            }
            if(b.name === selected_){
                this.selected = selected_;
                this.class = b.className;
                this.kind = b.kind;
            }
        });
        this.detail = true;
    }

    newMessages(data: Object){
        var list: Message[] = [];
        var msg: Message = {sender: null, type: null, receiver: null, content:null};
        for(let i in data){
            let s: string;
            s = JSON.stringify(data[i]);                                                
            msg.sender = s.substring(s.indexOf(":sender") + 33, s.indexOf("@"));
            msg.type = s.substring(2, s.indexOf("\\"));
            if(s.indexOf(":receiver") !== -1 && s.indexOf(":content") !== -1){
                msg.receiver = s.substring(s.indexOf(":receiver"), s.indexOf(":content"));
                let rec:string = "";
                for (let j = 0; j < msg.receiver.length; j++) {
                    if(msg.receiver.charAt(j) == "@"){
                        let k = 0;
                        while(msg.receiver.charAt(j-k) !== " "){
                            k++;
                        }
                        rec = rec + msg.receiver.substring(j-k,j) + " ";
                    }
                }
                msg.receiver = rec;
            }
            else if(s.indexOf(":receiver") !== -1){
                msg.receiver = s.substring(s.indexOf(":receiver"), s.length);
                let rec:string = "";
                for (let j = 0; j < msg.receiver.length; j++) {
                    if(msg.receiver.charAt(j) == "@"){
                        let k = 0;
                        while(msg.receiver.charAt(j-k) !== " "){
                            k++;
                        }
                        rec = rec + msg.receiver.substring(j-k,j) + " ";
                    }
                }
                msg.receiver = rec;
            }
            else{
                msg.receiver = "?";
            }
            if(s.indexOf(":content") !== -1){
                msg.content = s.substring(s.indexOf(":content") + 8, s.length-1);
            }
            else{
                msg.content = "empty"
            }
            list = list.concat({
                sender: msg.sender,
                type: msg.type,
                receiver: msg.receiver,
                content: msg.content,
            });
            // console.log(msg.type);
        }
        return list;
    }

    ngOnInit() {
        var name: string;
        this.route.data.subscribe(data => name = data['name']);
        console.log(name);


        if (name == 'sniffer') {
            this.isSniffer = true;
            this.isDummy = false;
            this.isIntrospector = false;
            this.isLog = false;

            let params = new HttpParams().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/sniffer', {
                params: params, responseType: 'text'
            }).subscribe(data => {
                // this.dataService.add("sniffer" + data, this.dataService.selection);
                this.dataService.updateFromRemote();
            });
            this.timer = interval(2000);
            this.subscription = this.timer.subscribe(val => {
                    if(this.sniffing === true){
                        this.http.get('http://localhost:2020/getSniffedMsg').subscribe(data => {
                            this.snifferMsgList = this.snifferMsgList.concat(this.newMessages(data));
                        })
                    }
                }
            )
        } else if (name == 'dummy') {
            this.isDummy = true;
            this.isSniffer = false;
            this.isIntrospector = false;
            this.isLog = false;

            let params = new HttpParams().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/dummy', {
                params: params, responseType: 'text'
            }).subscribe(data => {
                // this.dataService.add("da" + data, this.dataService.selection);
                this.dataService.updateFromRemote();
                this.sender = "da" + data;
            });
            this.timer = interval(2000);
            this.subscription = this.timer.subscribe(val => {
                    console.log("asking for messages");
                    this.http.get('http://localhost:2020/getDummyMsg').subscribe(data => {
                        this.dummyMsgList = this.dummyMsgList.concat(this.newMessages(data));
                    })
                }
            )
        } else if (name == 'introspector') {
            this.isIntrospector = true;
            this.isSniffer = false;
            this.isDummy = false;
            this.isLog = false;

            let params = new HttpParams().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/introspector', {
                params: params, responseType: 'text'
            }).subscribe(data => {
                // this.dataService.add("introspector" + data, this.dataService.selection);
                this.dataService.updateFromRemote();
            });           
            this.timer = interval(2000);
            this.subscription = this.timer.subscribe(val => {
                if(this.debugging === true){
                    this.http.get('http://localhost:2020/getBehaviours', {
                        responseType: 'json'
                    }).subscribe(data => {
                        var b: Behaviour;
                        var n: number = 0;
                        for(let i in data){
                            n++;
                            b = JSON.parse(JSON.stringify(data[i]));
                            if(this.behaviours.includes(b)){
                                this.behaviours = this.behaviours.filter(item => item !== b);
                            }
                            else if(this.behaviours.length < n){
                                this.behaviours = this.behaviours.concat(b);
                            }
                        }
                        this.tree.renderNodeChanges(this.VOID_DATA);
                        this.tree.renderNodeChanges(this.behaviours);
                    });
                    this.http.get('http://localhost:2020/getCurrentState', {
                        responseType: 'text'
                    }).subscribe(data => {
                        this.state = data;
                    });
                    this.http.get('http://localhost:2020/getSentMsg').subscribe(data => {
                        this.sentMsgList = this.sentMsgList.concat(this.newMessages(data));
                    });
                    this.http.get('http://localhost:2020/getReceivedMsg').subscribe(data => {
                        this.receivedMsgList = this.receivedMsgList.concat(this.newMessages(data));
                    });
                    this.http.get('http://localhost:2020/getPostedMsg').subscribe(data => {
                        this.postedMsgList = this.postedMsgList.concat(this.newMessages(data));
                    });
                }
            }); 
        } else if (name == 'log-manager') {
            this.isLog = true;
            this.isSniffer = false;
            this.isDummy = false;
            this.isIntrospector = false;

            let params = new HttpParams().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/log', {
                params: params, responseType: 'text'
            }).subscribe(data => {
                // this.dataService.add("log" + data, this.dataService.selection);
                this.dataService.updateFromRemote();
            });
            this.timer = interval(2000);
            this.subscription = this.timer.subscribe(val => {
                if(this.logging === true){
                    this.http.get('http://localhost:2020/startLog', {
                        responseType: 'json'
                    }).subscribe(data => {
                        var log: Log;
                        for(let i in data){
                            log = JSON.parse(JSON.stringify(data[i]));
                            this.logs = this.logs.concat(log);
                        }
                    });
                }
            });
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
        console.log("destroyed");
    }

    addSniffed() {
        let selection: string = ''; // localName only
        let index: number = this.dataService.selection.indexOf('@');
        if (index != -1) {
            for (var i = 0; i < index; i++) {
                selection = selection.concat(this.dataService.selection.charAt(i));
            }
            this.sniffed.push(selection);
            let params = new HttpParams().set("name", selection);
            this.http.get('http://localhost:2020/doSniff', {
                params: params
            }).subscribe(data => console.log(data));
        } else {
            this.snackBar.open("You must select an agent from the tree", "Dismiss", {
                duration: 4000,
            });
        }
        if(this.sniffed.length !== 0){
            this.sniffing = true;
        }
    }

    removeSniffed() {
        let selection: string = ''; // localName only
        let index: number = this.dataService.selection.indexOf('@');
        if (index != -1) {
            for (var i = 0; i < index; i++) {
                selection = selection.concat(this.dataService.selection.charAt(i));
            }
            this.showed = this.showed.filter(obj => obj !== selection);
            this.sniffed = this.sniffed.filter(obj => obj !== selection);
            let params = new HttpParams().set("name", selection);
            this.http.get('http://localhost:2020/doNotSniff', {
                params: params
            }).subscribe(data => console.log(data));
        } else {
            this.snackBar.open("You must select an agent from the tree", "Dismiss", {
                duration: 4000,
            });
        }
        if(this.sniffed.length === 0){
            this.sniffing = false;
        }   
    }

    addShowed() {
        let selection: string = '';
        let index: number = this.dataService.selection.indexOf('@');
        if (index != -1) {
            for (var i = 0; i < index; i++) {
                selection = selection.concat(this.dataService.selection.charAt(i));
            }
            this.showed.push(selection);
        } else {
            this.snackBar.open("You must select an agent from the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    clear(){
        this.snifferMsgList = [];
    }

    startLog(){
        this.logging = true;
    }

    sendDummy(){
        console.log("pressed")
        let params = new HttpParams()
        .set("senderName", this.sender)
        .set("receiverName", this.receiver)
        .set("commType", this.commtype.toString())
        .set("content", this.content)
        .set("ontology", this.ontology)
        .set("language", this.language)
        .set("protocol", this.protocol)
        .set("conversation", this.conversation)
        .set("repTo", this.repto)
        .set("repWith", this.repw)
        .set("encoding", this.encoding);
        this.http.get('http://localhost:2020/sendDummy', {
            params: params
        }).subscribe(data => console.log(data));
        console.log("end")
    }

    debugOn(){
        this.debugging = true;
        this.debugged = this.dataService.selection;
        let params = new HttpParams().set("name", this.dataService.selection);
        this.http.get('http://localhost:2020/debugOn', {
            params: params
        }).subscribe(data => {
            console.log(data)
        });
    }

    debugOff(){
        let params = new HttpParams().set("name", this.dataService.selection);
        this.http.get('http://localhost:2020/debugOff', {
            params: params
        }).subscribe(data => {
            console.log(data);
            this.behaviours = [];
            console.log(this.behaviours);
            this.tree.renderNodeChanges(this.VOID_DATA);
            this.sentMsgList = [];
            this.receivedMsgList = [];
            this.postedMsgList = [];
            this.state = "";
            this.debugged = "";
            this.detail = false;
            this.debugging = false;
        });
    }

}


export interface Log{
    name: string;
    level: number;
}

export interface Message{
    sender: string;
    type: string;
    receiver: string;
    content: string;
}

export interface Behaviour{
    allChildren?: Behaviour[];
    code: number;
    name: string;
    className: string;
    kind: string;
    simple: boolean;
}