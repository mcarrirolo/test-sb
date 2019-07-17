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
 * This class handle every simple OK/cancel dialog
 * 
 * @author Matteo Carrirolo
 * 
 */

@Component({
    selector: 'app-security-dialog',
    templateUrl: './security-dialog.component.html',
    styleUrls: ['./security-dialog.component.css']
})
export class SecurityDialogComponent implements OnInit {

    title = '';
    dataService :DataTransferService;
    status: boolean;



    constructor(private dialogRef: MatDialogRef < SecurityDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {
    }
    
    ngOnInit() {
        console.log(this.data)
        this.title = this.data[1];
        this.dataService = this.data[2];
    }

    public send(): void {
        console.log(this.dataService.selection);
        let params = new HttpParams().set("name", this.dataService.selection);
        if (this.title == 'kill') {
            this.http.get('http://localhost:2020/kill', {
                params: params, observe : 'response'
            }).subscribe(data => {
                console.log(data);
                if(data.statusText == "OK"){
                    // this.dataService.remove();
                    this.dataService.updateFromRemote();
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
        } else if (this.title == 'save') {
            this.http.get('http://localhost:2020/save', {
                params: params
            }).subscribe(data => console.log(data));
        } else if (this.title == 'Remove platform'){
            var n = 0;
            this.dataService.TREE_DATA.forEach(node => {
                node.childNode.forEach(subnode => {
                    if(subnode.name == "Remote Platforms"){
                        subnode.childNode.forEach(subsubnode =>{
                            if(subsubnode.name == this.dataService.selection){
                                subnode.childNode = subnode.childNode.filter(item => item.name !== subsubnode.name);
                            } else{
                                n++;
                            }
                        })
                    }
                });
            });
            this.dataService.apd.splice(n,1);
            this.dataService.changeRefreshStatus(true);
        } else if (this.title == 'APDescription'){
        } else if (this.title == 'Refresh description'){
            this.http.get('http://localhost:2020/getAPDescription', {
                responseType: 'text'
            }).subscribe(data => {
                if(data !== ""){
                    this.dataService.apd.push(data);
                }
            });
        } else if (this.title == 'quit') {
            this.http.get('http://localhost:2020/quit');
            window.close();
        }
        else if (this.title == 'shutdown') {
            this.http.get('http://localhost:2020/shutdown');
            window.close();
        }
        this.dialogRef.close();
    }

    public cancel(): void {
        this.dialogRef.close();
    }

}