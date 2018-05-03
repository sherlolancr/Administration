import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { AccountManagerService } from '../account-manager.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private localStorage:LocalStorageService,
    private router: Router,
    private accountmanager: AccountManagerService,
  ) { }

  ngOnInit() {
  }

  logout(){
    this.localStorage.clear("accessToken");
    this.accountmanager.setUserLogout();
    this.router.navigate(["login"]);
  }
}
