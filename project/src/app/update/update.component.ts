import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  users: Users[] = [];
  user = (localStorage.getItem('userID'));

  constructor(private userdata:UserDataService,private router:Router) { }

  //retrieves the user details that are to be updated
  ngOnInit(): void {
    console.log(this.user);
    this.userdata.getitem(this.user).subscribe((data)=>{
      console.log(data);
      this.users = data;
    
    })
  }
  //posts the user data to the server route and updates the db
  update(user:any) {
    console.log(user);
  
    
    this.userdata.updateitem(user).subscribe(data =>{
      console.log("posting"+data);
      this.router.navigate(['']);
    })
  }
}
