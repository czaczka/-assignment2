import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [{path: 'login', component:LoginComponent}, {path: 'profile', component:ProfileComponent}, {path: 'all', component:AllUsersComponent}, {path: 'add-user', component:AddUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
