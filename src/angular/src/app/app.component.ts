import {
    Component, ViewChild
} from '@angular/core';
import {
    HttpClient,
    HttpParams
} from '@angular/common/http';
import { DataTransferService } from './data-transfer.service';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataTransferService]
})
export class AppComponent {

    title = 'Test-sb';
    return = '';
    gridlayout = '55% 45%';

    @ViewChild(MainMenuComponent) menu: MainMenuComponent;

    constructor(private http: HttpClient) {}

    private sayHello(): void {
        this.return = 'loading...';
        this.http.get('http://localhost:2020/hello-world', {
            responseType: 'text'
        }).subscribe(data => console.log(data));
        this.http.get('http://localhost:2020/hello-world', {
            responseType: 'text'
        }).subscribe(data => this.return = data);
    }

    // choose between GET and POST method

    private changeName(): void {
        let params = new HttpParams().set("name", "matteo");
        this.http.get('http://localhost:2020/changeName', {
            params: params
        }).subscribe(data => console.log(data));
    }

    // to use if POST method is preferred, need JSON parsing
    // 
    // private changeName(): any{
    //   let params = new HttpParams().set("name",'Matteo'); //Create new HttpParams
    //   return this.http.post('http://localhost:2020/changeName', {params: params}).subscribe(data => console.log(data));
    // }

    rightClick() {
        console.log("right click");
        // return false;
    }
}