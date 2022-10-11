import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  username:string = "";
  useremail:string = "";
  userole:number= 0;
  userid:number=0 ;
  newuser:Users =  {
    userID: 0,
    name: "",
    email: "",
    role: 0,}


  constructor(private userdata:UserDataService) { }

  ngOnInit(): void {
  }
  addnewUser(event:any){
    event.preventDefault();
    if(this.userid == null){
      console.log("add userid");
    } else {
      this.newuser.userID = this.userid;
      this.newuser.email= this.useremail;
      this.newuser.name = this.username;
      this.newuser.role = this.userole;

       
      this.userdata.add(this.newuser).subscribe((data)=>{
        console.log("component" + data);
        if(data.err == null){
          console.log("user added");
        } else{
          console.log("user creation error");
        }
        this.userid = 0;
        this.username= "";
        this.useremail="";
        this.userole=0;
      });
    }
  }

}
