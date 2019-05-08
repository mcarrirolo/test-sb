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

    selection :string;

    constructor(private dialogRef: MatDialogRef < CloneDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    ngOnInit() {
        console.log(this.data)
        this.title = this.data[1];
        this.selection = this.data[2];
    }

    private send(): void {
        if (this.title == 'Clone') {
            let params = new HttpParams().set("name", this.selection).set("container", this.cont).set("newname", this.name);
            this.http.get('http://localhost:2020/clone', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'Migrate') {
            let params = new HttpParams().set("name", this.selection).set("container", this.cont);
            this.http.get('http://localhost:2020/migrate', {
                params: params
            }).subscribe(data => console.log(data));
        }
        this.dialogRef.close();
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}