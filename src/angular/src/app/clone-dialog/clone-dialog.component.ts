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
    selector: 'app-clone-dialog',
    templateUrl: './clone-dialog.component.html',
    styleUrls: ['./clone-dialog.component.css']
})

export class CloneDialogComponent implements OnInit {

    title = '';
    name = '';
    cont = '';

    constructor(private dialogRef: MatDialogRef < CloneDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    ngOnInit() {
        console.log(this.data)
        this.title = this.data;
    }

    private send(): void {
        let params = new HttpParams().set("name", this.name).set("container", this.cont);
        if (this.title == 'Clone') {
            this.http.get('http://localhost:2020/clone', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'Migrate') {
            this.http.get('http://localhost:2020/migrate', {
                params: params
            }).subscribe(data => console.log(data));
        }
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}