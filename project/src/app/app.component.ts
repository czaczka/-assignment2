import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private router:Router, private httpClient: HttpClient) { }


ngOnInit(): void {
}
//logs out the current user
clear() {
  sessionStorage.clear();
  this.router.navigateByUrl("/login");
}
}

