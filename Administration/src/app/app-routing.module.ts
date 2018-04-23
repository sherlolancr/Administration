import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {LoginInputComponent} from './login-input/login-input.component'
import { UsersComponent } from './users/users.component';
import { OrganizationComponent } from './organization/organization.component';
import { MessagesComponent } from './messages/messages.component';
import { RequestsComponent } from './requests/requests.component';
import { OrganizationInformationComponent } from './organization-information/organization-information.component';
import { EnvironmentInformationComponent } from './environment-information/environment-information.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRequestComponent } from './home-request/home-request.component';

const routes: Routes = [
  { path:'' ,redirectTo:'/home/dashboard', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent, 
    children: [
      {path: 'users',component:UsersComponent}, 
      {path: 'organization',component:OrganizationComponent},
      {path: 'messages',component:MessagesComponent},
      {path: 'requests',component:HomeRequestComponent} ,
      {path: 'dashboard',component:DashboardComponent} ,
    ]
  },
  {path:'organizationProfile/:oid', component: OrganizationInformationComponent, 
    children: [
      {path: '#',redirectTo:'organizationProfile/:oid'}, 
      
    ]
  },
  {path:'environmentProfile/:oid/:eid', component: EnvironmentInformationComponent, 
  children: [
    {path: '#',redirectTo:'environmentProfile/:oid/:eid'}, 
    
  ]
},
  { path: 'login', component: LoginInputComponent },
  { path: 'userInformation/:uid', component: UserInformationComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes),
  ]
})


export class AppRoutingModule { }
