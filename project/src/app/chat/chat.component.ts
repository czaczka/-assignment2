import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagecontent:string="";
  messages:string[]=[];
  ioConnection:any;
  constructor(private socketService:SocketService) { }
//initialises the sockets connection
  ngOnInit(): void {
    this.initIoConnection();
  }
  //gets messages that are sent
  private initIoConnection(){
    // this.socketService.initSocket();
    this.ioConnection = this.socketService.getMessage()
      .subscribe((message:any)=> {
        this.messages.push(message);
      });
  }
  //sends chat messages
  chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent);
      this.messagecontent = "";
    } else {
      console.log('no message');
    }
  }


}
