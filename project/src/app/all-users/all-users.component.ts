import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Users[] = [];

  constructor(private userdata:UserDataService) { }

  ngOnInit(): void {
    this.userdata.getlist().subscribe((data)=>{
      this.users = data;
    })
  }
  deleteproduct(id: any) {
    if (confirm("are you sure you want to delete this item")){
      this.userdata.deleteitem(id).subscribe((data)=>{
        this.users = data;
      })
    }
  }

}
