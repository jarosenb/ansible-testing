import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  socket = webSocket('wss://' + window.location.host + '/api/ws/base/')
  constructor(private http: HttpClient) {
    this.socket.next({'hello': 'world'})
    this.socket.subscribe(x => console.log(x))
  }
}
