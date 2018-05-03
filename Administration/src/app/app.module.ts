import {User} from './TestData/TestData';
import {XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
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
import {HttpClientModule, HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Http,HttpModule} from '@angular/http'
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
import { BillsComponent } from './bills/bills.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { EnvironmentInformationComponent } from './environment-information/environment-information.component';
import { EnvironmenHomeComponent } from './environmen-home/environmen-home.component';
import { UserInformationComponent } from './user-information/user-information.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRequestComponent } from './home-request/home-request.component';
import {MatListModule} from '@angular/material/list';
import { RequestInformationComponent } from './request-information/request-information.component';
import {MatSelectModule} from '@angular/material/select';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { BillInformationComponent } from './bill-information/bill-information.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SafenetPolicyComponent } from './safenet-policy/safenet-policy.component';
import { OrganizationService } from './services/organization.service';
import { LocalStorageService, SessionStorageService, Ng2Webstorage } from 'ngx-webstorage';
import { AccountManagerService } from './account-manager.service';
import { UserlistService } from './services/userlist.service';
import { EnvironmentService } from './services/environment.service';
import { ContractService } from './services/contract.service';

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
    BillsComponent,
    EnvironmentsComponent,
    EnvironmentInformationComponent,
    EnvironmenHomeComponent,
    UserInformationComponent,
    EditUserComponent,
    DashboardComponent,
    HomeRequestComponent,
    RequestInformationComponent,
    ContractDetailComponent,
    BillInformationComponent,
    SafenetPolicyComponent,
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
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatPaginatorModule,
    HttpModule,

  ],
  providers: [UserService, OrganizationService,  LocalStorageService,
  SessionStorageService,
  Ng2Webstorage,
  AccountManagerService,HttpClient, UserlistService, EnvironmentService, ContractService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
