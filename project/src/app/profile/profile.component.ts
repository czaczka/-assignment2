import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = 0;
  name = "";
  email = "";
  role = "";


  //checks if user is logged in. If not they are redirected to login page otherwise if they are then their details are retrieved from session storage and displayed on their profile page
  constructor(private router: Router, private httpClient: HttpClient) { 
  if (!(sessionStorage.getItem('loginStatus')=="true")){
    alert("login please");
    this.router.navigateByUrl("/login");
  }
  this.id = Number(sessionStorage.getItem('userID'));
  this.name = sessionStorage.getItem('name')!;
  this.email = sessionStorage.getItem('email')!;
  this.role = sessionStorage.getItem('role')!;

  }
  ngOnInit(): void {
   
  }
  

}
