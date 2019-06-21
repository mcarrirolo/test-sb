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
import {
    DataTransferService
} from '../data-transfer.service';

@Component({
    selector: 'app-security-dialog',
    templateUrl: './security-dialog.component.html',
    styleUrls: ['./security-dialog.component.css']
})
export class SecurityDialogComponent implements OnInit {

    title = '';
    selection: string;
    dataService :DataTransferService;
    status: boolean;



    constructor(private dialogRef: MatDialogRef < SecurityDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {
    }
    
    ngOnInit() {
        console.log(this.data)
        this.title = this.data[1];
        this.selection = this.data[2];
        this.dataService = this.data[3];
    }

    private send(): void {
        console.log(this.selection);
        let params = new HttpParams().set("name", this.selection);
        if (this.title == 'kill') {
            this.http.get('http://localhost:2020/kill', {
                params: params, observe : 'response'
            }).subscribe(data => {
                console.log(data);
                if(data.statusText == "OK"){
                    this.dataService.remove();
                    // this.dataService.updateFromRemote();
                };
            });
        } else if (this.title == 'suspend') {
            this.http.get('http://localhost:2020/suspend', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'resume') {
            this.http.get('http://localhost:2020/resume', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'freeze') {
            this.http.get('http://localhost:2020/freeze', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'thaw') {
            this.http.get('http://localhost:2020/thaw', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'save') {
            this.http.get('http://localhost:2020/save', {
                params: params
            }).subscribe(data => console.log(data));
        }
        this.dialogRef.close();
    }

    private cancel(): void {
        this.dialogRef.close();
    }

}