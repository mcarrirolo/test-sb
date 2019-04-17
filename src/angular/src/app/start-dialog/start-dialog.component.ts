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
    selector: 'app-start-dialog',
    templateUrl: './start-dialog.component.html',
    styleUrls: ['./start-dialog.component.css']
})

export class StartDialogComponent implements OnInit {

    name = '';
    clas = 'jade.core.Agent';
    args = '';
    own = '';
    cont = 'MainContainer';

    ngOnInit() {}

    constructor(private dialogRef: MatDialogRef < StartDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    private send(): void {
        let params = new HttpParams().set("name", this.name).set("clas", this.clas).set("args", this.args).set("owner", this.own).set("container", this.cont);
        this.http.get('http://localhost:2020/start', {
            params: params
        }).subscribe(data => console.log(data));
        this.dialogRef.close();
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}