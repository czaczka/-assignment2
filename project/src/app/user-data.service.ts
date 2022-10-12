import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  //function for adding users
  add(user:Users){
    return this.http.post<any>('http://localhost:3000/api/add', user);
  }
  //function for getting entire list of users
  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist');
  }
  //function for getting individual user
  getitem(userID: any){
    return this.http.post<any>('http://localhost:3000/api/getitem', {'userID':userID} );
  }
  //function for updating user
  updateitem(user: Users){
    return this.http.post<any>('http://localhost:3000/api/update', user );

  }
  //function for deleting user
  deleteitem(productID: any) {
    return this.http.post<any>('http://localhost:3000/api/deleteitem', {'productid':productID} );
  }
  //function for checking if userid is unique
  checkvalidid(userID: any){
    return this.http.post<any>('http://localhost:3000/api/checkvalidid', {'id':userID} );
  }
  //function for checking if login credentials are correct
  checkuser(useremail: any, userpassword: any){
    return this.http.post<any>('http://localhost:3000/api/checkuser', {useremail,userpassword});
  }
}
