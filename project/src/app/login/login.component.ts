import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';
import { Router } from '@angular/router';


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
  constructor(private userdata:UserDataService,private router:Router) { }

  ngOnInit(): void {
  }
  login(useremail:any,userpassword:any){

    this.userdata.checkuser(useremail,userpassword).subscribe((data)=>{

      if (data) {
        console.log(data);
        console.log("user verified");
        sessionStorage.clear();
        sessionStorage.setItem('userID', data[0].userID);
        sessionStorage.setItem('name', data[0].name);
        sessionStorage.setItem('email', data[0].email);
        sessionStorage.setItem('role', data[0].role);
        sessionStorage.setItem('loginStatus', "true");
        this.router.navigateByUrl("/profile");

      } else{
        console.log(data);
        alert("incorrect user email or password");
        console.log("user not verified");
      }
    })
  }
}
