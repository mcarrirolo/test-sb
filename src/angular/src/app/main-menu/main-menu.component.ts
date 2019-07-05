import {
    Component,
    OnInit
} from '@angular/core';
import {
    MatDialog,
    MatDialogRef,
    MatSnackBar
} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {
    StartDialogComponent
} from '../start-dialog/start-dialog.component'
import {
    CloneDialogComponent
} from '../clone-dialog/clone-dialog.component'
import {
    SecurityDialogComponent
} from '../security-dialog/security-dialog.component'
import {
    HttpClient,
    HttpParams
} from '@angular/common/http';
import {
    Router
} from '@angular/router';
import {
    DataTransferService
} from '../data-transfer.service';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    ngOnInit() {}

    selection = '';

    startDialogRef: MatDialogRef < StartDialogComponent > ;
    cloneDialogRef: MatDialogRef < CloneDialogComponent > ;
    securityDialogRef: MatDialogRef < SecurityDialogComponent > ;

    constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private http: HttpClient, private router: Router, private dataService: DataTransferService) {}


    startDialog() {
        this.startDialogRef = this.dialog.open(StartDialogComponent, {
            data: {
                1: this.dataService
            }
        });
    }

    cloneDialog(title: string) {
        if (this.dataService.selection.indexOf('@') !== -1 && this.dataService.selection != '') {
            this.cloneDialogRef = this.dialog.open(CloneDialogComponent, {
                data: {
                    1: title,
                    2: this.dataService
                }
            });
            this.snackBar.open("Warning: Some agents might not be able to migrate or be cloned because of lack of serialization support in their implementation. If you are not sure about the  implemementation of this agent, Cancel this operation.", "Dismiss", {
                duration: 16000,
            });
        } else {
            this.snackBar.open("You must select an agent in the tree", "Dismiss", {
                duration: 2000,
            });
        } 
    }

    securityDialog(title: string) {
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: {
                1: title,
                2: this.dataService
            }
        });
    }

    startSniffer() {
        if (this.dataService.selection.indexOf('@') == -1 && this.dataService.selection != '') {
            console.log("Starting sniffer on " + this.dataService.selection);
            this.router.navigate(['/sniffer']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startDummy() {
        if (this.dataService.selection.indexOf('@') == -1 && this.dataService.selection != '') {
            console.log("Starting dummy on " + this.dataService.selection);
            this.router.navigate(['/dummy']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startIntrospector() {
        if (this.dataService.selection.indexOf('@') == -1 && this.dataService.selection != '') {
            console.log("Starting dummy on " + this.dataService.selection);
            this.router.navigate(['/introspector']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startLog() {
        if (this.dataService.selection.indexOf('@') == -1 && this.dataService.selection != '') {
            console.log("Starting log-manager on " + this.dataService.selection);
            this.router.navigate(['/log']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    goToLink(url: string){
        window.open(url, "_blank");
    }

    addPlatformAMS(){
        this.cloneDialogRef = this.dialog.open(CloneDialogComponent, {
            data: {
                1: "Add remote platforms via AMS",
                2: this.dataService
            }
        });
    }

    removePlatform(){
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: {
                1: "Remove platform",
                2: this.dataService
            }
        });
    }

    refreshAgents(){
        var n = 0;
        this.dataService.TREE_DATA.forEach(node => {
            node.childNode.forEach(subnode => {
                if(subnode.name == "Remote Platforms"){
                    subnode.childNode.forEach(subsubnode =>{
                        if(subsubnode.name == this.dataService.selection){
                            subsubnode.childNode = [];
                        }
                    })
                }
            });
        });
        let params = new HttpParams().set("platform", this.dataService.selection);
        this.http.get('http://localhost:2020/refreshAgents', {
            params: params
        }).subscribe(data => {
            console.log(data)
            this.dataService.changeRefreshStatus(true);
        });
    }

    viewDescription(){
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: {
                1: "APDescription",
                2: this.dataService
            }
        });
    }

    refreshDescription(){
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: {
                1: "Refresh description",
                2: this.dataService
            }
        })
    }

}
