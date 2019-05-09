import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    MatDialog,
    MatDialogRef,
    MatSnackBar
} from '@angular/material';
import {
    StartDialogComponent
} from '../start-dialog/start-dialog.component'
import {
    CloneDialogComponent
} from '../clone-dialog/clone-dialog.component'
import {
    SecurityDialogComponent
} from '../security-dialog/security-dialog.component'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    ngOnInit() {}

    shouldRouterLink = false;
    @Input() selection = '';

    startDialogRef: MatDialogRef < StartDialogComponent > ;
    cloneDialogRef: MatDialogRef < CloneDialogComponent > ;
    securityDialogRef: MatDialogRef < SecurityDialogComponent > ;

    constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private http: HttpClient, private router: Router) {}


    startDialog() {
        this.startDialogRef = this.dialog.open(StartDialogComponent);
    }

    cloneDialog(title: string) {
        this.cloneDialogRef = this.dialog.open(CloneDialogComponent, {
            data: {
                1: title,
                2: this.selection
            }
        });
        this.snackBar.open("Warning: Some agents might not be able to migrate or be cloned because of lack of serialization support in their implementation. If you are not sure about the  implemementation of this agent, Cancel this operation.", "Dismiss", {
            duration: 16000,
        });
    }

    securityDialog(title: string) {
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: {
                1: title,
                2: this.selection
            }
        });
    }

    startSniffer() {
        if (this.selection.indexOf('@') == -1 && this.selection != ''){
            console.log("Starting sniffer on " + this.selection);
            let params = new HttpParams().set("container", this.selection);
            this.http.get('http://localhost:2020/sniffer', {params: params}).subscribe(data => console.log(data));
            this.router.navigate(['/test']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startDummy() {
        if (this.selection.indexOf('@') == -1 && this.selection != ''){
            this.shouldRouterLink = true;
            console.log("Starting dummy on " + this.selection);
            let params = new HttpParams().set("container", this.selection);
            this.http.get('http://localhost:2020/dummy', {params: params}).subscribe(data => console.log(data));
            this.router.navigate(['/test']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startIntrospector() {
        if (this.selection.indexOf('@') == -1 && this.selection != ''){
            this.shouldRouterLink = true;
            console.log("Starting introspector on " + this.selection);
            let params = new HttpParams().set("container", this.selection);
            this.http.get('http://localhost:2020/introspector', {params: params}).subscribe(data => console.log(data));
            this.router.navigate(['/test']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startLog() {
        if (this.selection.indexOf('@') == -1 && this.selection != ''){
            this.shouldRouterLink = true;
            console.log("Starting log-manager on " + this.selection);
            let params = new HttpParams().set("container", this.selection);
            this.http.get('http://localhost:2020/log', {params: params}).subscribe(data => console.log(data));
            this.router.navigate(['/test']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

}