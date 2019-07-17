import {
    Component, ViewChild
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { DataTransferService } from './data-transfer.service';
import { MainMenuComponent } from './main-menu/main-menu.component';


/**
 * 
 * This class represents the main component of the web GUI
 * 
 * @author Matteo Carrirolo
 * 
 */

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataTransferService]
})
export class AppComponent{

    title = 'MVC-JADE';

    @ViewChild(MainMenuComponent) menu: MainMenuComponent;

    constructor(private http: HttpClient) {}

    rightClick() {
        console.log("right click");
        // return false;
    }
}