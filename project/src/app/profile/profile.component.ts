import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: Users[] = [];

  constructor(private userdata:UserDataService) { }

  ngOnInit(): void {
    this.userdata.getlist().subscribe((data)=>{
      this.users = data;
    })
  }

}
