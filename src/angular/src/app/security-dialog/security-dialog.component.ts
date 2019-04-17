import {
    Component,
    OnInit,
    Inject
} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material';
import {
    HttpClient,
    HttpParams,
    HttpResponse
} from '@angular/common/http';

@Component({
    selector: 'app-security-dialog',
    templateUrl: './security-dialog.component.html',
    styleUrls: ['./security-dialog.component.css']
})
export class SecurityDialogComponent implements OnInit {

    title = '';

    constructor(private dialogRef: MatDialogRef < SecurityDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    ngOnInit() {
        console.log(this.data)
        this.title = this.data;
    }

    private send(): void {
        // let params = new HttpParams();
        if (this.title == 'kill') {
            this.http.get('http://localhost:2020/kill').subscribe(data => console.log(data));
        } else if (this.title == 'suspend') {
            this.http.get('http://localhost:2020/suspend').subscribe(data => console.log(data));
        } else if (this.title == 'resume') {
            this.http.get('http://localhost:2020/resume').subscribe(data => console.log(data));
        }
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}