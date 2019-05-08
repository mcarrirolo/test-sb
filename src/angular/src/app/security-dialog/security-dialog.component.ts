import {
    Component,
    OnInit,
    Inject,
    Input,
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
import { TreeComponent } from '../tree/tree.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-security-dialog',
    templateUrl: './security-dialog.component.html',
    styleUrls: ['./security-dialog.component.css']
})
export class SecurityDialogComponent implements OnInit {

    title = '';

    selection: string;


    constructor(private dialogRef: MatDialogRef < SecurityDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    ngOnInit() {
        console.log(this.data)
        this.title = this.data[1];
        this.selection = this.data[2];
    }

    private send(): void {
        console.log(this.selection);
        let params = new HttpParams().set("name", this.selection);
        if (this.title == 'kill') {
            this.http.get('http://localhost:2020/kill', {params: params}).subscribe(data => console.log(data));
        } else if (this.title == 'suspend') {
            this.http.get('http://localhost:2020/suspend', {params: params}).subscribe(data => console.log(data));
        } else if (this.title == 'resume') {
            this.http.get('http://localhost:2020/resume', {params: params}).subscribe(data => console.log(data));
        } else if (this.title == 'freeze') {
            this.http.get('http://localhost:2020/freeze', {params: params}).subscribe(data => console.log(data));
        } else if (this.title == 'thaw') {
            this.http.get('http://localhost:2020/thaw', {params: params}).subscribe(data => console.log(data));
        } else if (this.title == 'save') {
            this.http.get('http://localhost:2020/save', {params: params}).subscribe(data => console.log(data));
        } 
        this.dialogRef.close();
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}