import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-sb';
  return = '';

  constructor(private http: HttpClient) {
  }

  private sayHello(): void {
    this.return = 'loading...';
    this.http.get('http://localhost:8080/hello-world').subscribe(data => console.log(data));
    this.http.get('http://localhost:8080/hello-world', {responseType: 'text'}).subscribe(data => this.return = data);
  }
}
