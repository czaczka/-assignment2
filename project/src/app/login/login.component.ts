import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  useremail:string = "";
  userole:number= 0;
  userid:number=0 ;
  userpassword:string= "";
  newuser:Users =  {
    userID: 0,
    name: "",
    email: "",
    role: 0,
    password: ""}
  constructor(private userdata:UserDataService) { }

  ngOnInit(): void {
  }
  login(useremail:any,userpassword:any){

    this.userdata.checkuser(useremail,userpassword).subscribe((data)=>{

      if (data) {
        console.log(data);
        console.log("user verified");
      } else{
        console.log(data);
        alert("incorrect user email or password");
        console.log("user not verified");
      }
    })
  }
}
