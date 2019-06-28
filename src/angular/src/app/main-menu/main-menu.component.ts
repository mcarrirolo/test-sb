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


    updateSelection() {
        this.selection = this.dataService.selection;
    }

    startDialog() {
        this.startDialogRef = this.dialog.open(StartDialogComponent, {
            data: {
                1: this.dataService
            }
        });
    }

    cloneDialog(title: string) {
        this.updateSelection();
        if (this.selection.indexOf('@') !== -1 && this.selection != '') {
            this.cloneDialogRef = this.dialog.open(CloneDialogComponent, {
                data: {
                    1: title,
                    2: this.selection
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
        this.updateSelection();
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: {
                1: title,
                2: this.selection,
                3: this.dataService
            }
        });
    }

    startSniffer() {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting sniffer on " + this.selection);
            this.router.navigate(['/sniffer']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startDummy() {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting dummy on " + this.selection);
            this.router.navigate(['/dummy']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startIntrospector() {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting dummy on " + this.selection);
            this.router.navigate(['/introspector']);
        } else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    }

    startLog() {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting log-manager on " + this.selection);
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

}
