import {
    Component,
    OnInit
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

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    constructor(private route: ActivatedRoute, private dataService: DataTransferService, private snackBar: MatSnackBar, private http: HttpClient) {}

    isSniffer = false;
    isDummy = false;
    isIntrospector = false;
    isLog = false;

    interval: any;
    sniffed: string[] = [];
    showed: string[] = [];

    logging: boolean = false;

    sender: string;
    receiver: string;
    content: string;
    ontology: string;
    language: string = "fipa-sl0";
    protocol: string;

    messagelist: Message[] = [];
    logs: Log[] = [];


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
                this.dataService.add("sniffer" + data, this.dataService.selection);
            });
            this.interval = setInterval(() => { 
                this.http.get('http://localhost:2020/getSniffedMsg').subscribe(data => {
                    // console.log(data);
                    var msg: Message = {sender: null, type: null, receiver: null, content:null};

                    for(let i in data){
                        let s: string;
                        s = JSON.stringify(data[i]);

                        console.log(s);
                                                
                        msg.sender = s.substring(s.indexOf(":sender") + 33, s.indexOf("@"));
                        msg.type = s.substring(2, s.indexOf("\\"));
                        if(s.indexOf(":receiver") !== -1){
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
                        else{
                            msg.receiver = "?";
                        }
                        if(s.indexOf(":content") !== -1){
                            msg.content = s.substring(s.indexOf(":content") + 8, s.length-1);
                        }
                        else{
                            msg.content = "empty"
                        }

                        this.messagelist = this.messagelist.concat({
                            sender: msg.sender,
                            type: msg.type,
                            receiver: msg.receiver,
                            content: msg.content,
                        });
                        // console.log(msg.type);
                    }
                    // console.log(this.messagelist);
                });
            }, 2000);


        } else if (name == 'dummy') {
            this.isDummy = true;
            this.isSniffer = false;
            this.isIntrospector = false;
            this.isLog = false;

            let params = new HttpParams().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/dummy', {
                params: params, responseType: 'text'
            }).subscribe(data => {
                this.dataService.add("da" + data, this.dataService.selection);
                this.sender = "da" + data;
            });
            
        } else if (name == 'introspector') {
            this.isIntrospector = true;
            this.isSniffer = false;
            this.isDummy = false;
            this.isLog = false;

            
        } else if (name == 'log-manager') {
            this.isLog = true;
            this.isSniffer = false;
            this.isDummy = false;
            this.isIntrospector = false;

            let params = new HttpParams().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/log', {
                params: params, responseType: 'text'
            }).subscribe(data => {
                this.dataService.add("log" + data, this.dataService.selection);
            });

            this.interval = setInterval(() => { 
                if(this.logging === true){
                    this.http.get('http://localhost:2020/startLog', {
                        responseType: 'json'
                    }).subscribe(data => {
                        var log: Log;
                        for(let i in data){
                            log = JSON.parse(JSON.stringify(data[i]));
                            // console.log(this.log);
                            this.logs = this.logs.concat(log);
                        }
                        // console.log(this.logs);
                    });
                }
            }, 4000);
        }
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
        this.messagelist = [];
    }

    startLog(){
        this.logging = true;
    }







    sendDummy(){
        let params = new HttpParams().set("senderName", this.sender).set("receiverName", this.receiver).set("content", this.content).set("ontology", this.ontology).set("language", this.language).set("protocol", this.protocol);
        this.http.get('http://localhost:2020/sendDummy', {
            params: params
        }).subscribe(data => console.log(data));
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