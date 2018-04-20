import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginInputComponent } from './login-input/login-input.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule }     from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { OrganizationComponent } from './organization/organization.component';
import { MessagesComponent } from './messages/messages.component';
import { RequestsComponent } from './requests/requests.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './services/user.service';
import { OrganizationInformationComponent } from './organization-information/organization-information.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { TableFormatComponent } from './table-format/table-format.component';
import { ContractComponent } from './contract/contract.component';
import { LogComponent } from './log/log.component';
import { BillsComponent } from './bills/bills.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { EnvironmentInformationComponent } from './environment-information/environment-information.component';
import { EnvironmenHomeComponent } from './environmen-home/environmen-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginInputComponent,
    HomepageComponent,
    UsersComponent,
    OrganizationComponent,
    MessagesComponent,
    RequestsComponent,
    OrganizationInformationComponent,
    OrganizationHomeComponent,
    UserListComponent,
    TableFormatComponent,
    ContractComponent,
    LogComponent,
    BillsComponent,
    EnvironmentsComponent,
    EnvironmentInformationComponent,
    EnvironmenHomeComponent
  ],
  imports: [
    MatTableModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
