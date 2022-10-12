import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Users[] = [];

  constructor(private userdata:UserDataService,private router:Router) { }

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
  update(id: any) {
    localStorage.removeItem(id);
    localStorage.setItem('userID', id);

    this.router.navigateByUrl("/update");
  }

}
