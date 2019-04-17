import {
    Component,
    OnInit
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

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    ngOnInit() {}

    startDialogRef: MatDialogRef < StartDialogComponent > ;
    cloneDialogRef: MatDialogRef < CloneDialogComponent > ;
    securityDialogRef: MatDialogRef < SecurityDialogComponent > ;

    constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}


    startDialog() {
        this.startDialogRef = this.dialog.open(StartDialogComponent);
    }

    cloneDialog(title: string) {
        this.cloneDialogRef = this.dialog.open(CloneDialogComponent, {
            data: title
        });
        this.snackBar.open("Warning: Some agents might not be able to migrate or be cloned because of lack of serialization support in their implementation. If you are not sure about the  implemementation of this agent, Cancel this operation.", "Dismiss", {
            duration: 16000,
        });
    }

    securityDialog(title: string) {
        this.securityDialogRef = this.dialog.open(SecurityDialogComponent, {
            data: title
        });
    }

}