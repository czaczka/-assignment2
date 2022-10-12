import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  add(user:Users){
    return this.http.post<any>('http://localhost:3000/api/add', user);
  }
  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist');
  }
  // getuser(productID: any){
  //   return this.http.post<any>('http://localhost:3000/api/getitem', {'userid':userID} );
  // }
  updateitem(user: Users){
    return this.http.post<any>('http://localhost:3000/api/update', user );

  }
  deleteitem(productID: any) {
    return this.http.post<any>('http://localhost:3000/api/deleteitem', {'productid':productID} );
  }
  checkvalidid(userID: any){
    return this.http.post<any>('http://localhost:3000/api/checkvalidid', {'id':userID} );
  }
  getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount');
  }
  checkuser(useremail: any, userpassword: any){
    return this.http.post<any>('http://localhost:3000/api/checkuser', {useremail,userpassword});
  }
}
