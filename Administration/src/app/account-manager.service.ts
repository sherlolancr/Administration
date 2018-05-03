import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AccountManagerService {
  user_name:string;
  user_login:boolean;
  localStorage:LocalStorageService
  constructor() { }

  public setUserLogin(){

    this.user_login = true;
  
  }
  
  public setUserLogout(){
    
    this.user_login = false;

  }

  public getUserState(){
    return this.user_login;
  }

  public getAccessToken(){
    return "Bearer "+localStorage.getItem("ng2-webstorage|accesstoken").replace("\"","");
  }

}
