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

const routes: Routes = [
  { path:'' ,redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent, 
    children: [
      {path: 'users',component:UsersComponent}, 
      {path: 'organization',component:OrganizationComponent},
      {path: 'messages',component:MessagesComponent},
      {path: 'requests',component:RequestsComponent} ,
      
    ]
  },
  {path:'organizationProfile/:id', component: OrganizationInformationComponent, 
    children: [
      {path: '#',redirectTo:'organizationProfile/:id'}, 
      
    ]
  },
  {path:'environmentProfile/:id', component: EnvironmentInformationComponent, 
  children: [
    {path: '#',redirectTo:'environmentProfile/:id'}, 
    
  ]
},
  { path: 'login', component: LoginInputComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes),
  ]
})


export class AppRoutingModule { }
