import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  animations:[
    trigger('iderrorState',[
      state('show',style({
        opacity:1,
        display:'block'
})),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ]),
    trigger('noticeState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),

    ])
  ]
})
export class AddUserComponent implements OnInit {
  username:string = "";
  useremail:string = "";
  userole:string= "";
  userid:number=0 ;
  userpassword:string= "";
  newuser:Users =  {
    userID: 0,
    name: "",
    email: "",
    role: "",
    password: ""}

    newProductMessage = "";
    iderrormsg:string = "this id is already in use";
    iderrormsg2:string = "";
    iderrorshow:boolean = false;
    noticeshow:boolean = false;


  constructor(private userdata:UserDataService) { }

  ngOnInit(): void {
  }
  get stateName(){
    return this.iderrorshow ? 'show':'hide';
  }
  get noticeName(){
    return this.noticeshow ? 'show':'hide';
  }
  //adds new user via userdata service
  addnewUser(event:any){
    event.preventDefault();
    if(this.userid == null){
      this.iderrorshow = !this.iderrorshow;
      console.log("add userid");
    } else {
      this.newuser.userID = this.userid;
      this.newuser.email= this.useremail;
      this.newuser.name = this.username;
      this.newuser.role = this.userole;
      this.newuser.password = this.userpassword;

       
      this.userdata.add(this.newuser).subscribe((data)=>{
        console.log("component" + data);
        if(data.err == null){
          this.newProductMessage = data.num + "new user (" + this.username + ") was added";
          console.log("user added");
          alert("user "+ this.username + " added");
        } else{
          this.newProductMessage = data.err;
          console.log("user creation error");
          alert("error ID already exists");
        }
        this.userid = 0;
        this.username= "";
        this.useremail="";
        this.userole="";
        this.userpassword="";
      });
    }
  }
  //checks if user id has already been taken
  checkvalidid(event: any){
    this.noticeshow = false
    this.userdata.checkvalidid(event).subscribe((data)=>{
      if (data.success == 0){
        this.iderrormsg2 = "something above" + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      } else{
        this.iderrorshow = false;
        this.iderrormsg2 = "";
      }
    })
  }
}
