import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket:any;
  constructor() {this.socket = io(SERVER_URL);}
  //function for sending messages
  send(message: string){
    this.socket.emit('message',message);
    alert("sending:"+message);
  }
  //function for receiving messages
  getMessage(){
    return new Observable(observer=>{
      this.socket.on('message', (data:any)=> {observer.next(data);
      });
    });
  }
}
