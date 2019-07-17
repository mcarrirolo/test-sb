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

/**
 * 
 * This class handle the setup of a new agent
 * 
 * @author Matteo Carrirolo
 * 
 */

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
    dataService: DataTransferService;

    ngOnInit() {
        console.log(this.data)
        this.dataService = this.data[1];
    }

    constructor(private dialogRef: MatDialogRef < StartDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {}

    public send(): void {
        let params = new HttpParams().set("name", this.name).set("clas", this.clas).set("args", this.args).set("owner", this.own).set("container", this.cont);
        this.http.get('http://localhost:2020/start', {
            params: params, observe : 'response'
        }).subscribe(data => {
            console.log(data);
            if(data.statusText == "OK"){
                // this.dataService.add(this.name, this.cont);
                this.dataService.updateFromRemote();
            };
        });
        this.dialogRef.close();
    }

    public cancel(): void {
        this.dialogRef.close();
    }

}