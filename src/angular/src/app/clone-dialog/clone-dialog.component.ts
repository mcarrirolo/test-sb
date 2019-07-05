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
    HttpParams
} from '@angular/common/http';
import { DataTransferService } from '../data-transfer.service';

@Component({
    selector: 'app-clone-dialog',
    templateUrl: './clone-dialog.component.html',
    styleUrls: ['./clone-dialog.component.css']
})

export class CloneDialogComponent implements OnInit {

    title = '';
    name = '';
    cont = '';
    addr = '';
    dataService :DataTransferService;

    constructor(private dialogRef: MatDialogRef < CloneDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    ngOnInit() {
        console.log(this.data)
        this.title = this.data[1];
        this.dataService = this.data[2];
    }

    private send(): void {
        if (this.title == 'Clone') {
            let params = new HttpParams().set("name", this.dataService.selection).set("container", this.cont).set("newname", this.name);
            this.http.get('http://localhost:2020/clone', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'Migrate') {
            let params = new HttpParams().set("name", this.dataService.selection).set("container", this.cont);
            this.http.get('http://localhost:2020/migrate', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'Thaw') {
            let params = new HttpParams().set("name", this.dataService.selection).set("container", this.cont);
            this.http.get('http://localhost:2020/thaw', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'Add remote platforms via AMS') {
            let params = new HttpParams().set("url", this.addr);
            this.http.get('http://localhost:2020/addPlatformAMS', {
                params: params
            }).subscribe(data => console.log(data));
        }
        this.dialogRef.close();
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}