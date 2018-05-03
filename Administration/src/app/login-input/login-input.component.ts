import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Component, OnInit } from '@angular/core';
import { LoginInformation } from '../login-information';
import { Router, ActivatedRoute } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { Http,HttpModule } from '@angular/http';
import { RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Ng2Webstorage, LocalStorageService,SessionStorage, SessionStorageService} from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { userData } from '../TestData/TestData';
@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {
  login_information:LoginInformation ;


  ngOnInit() {
    if (this.localStorage.retrieve("accessToken") != null){
      this.accountManager.setUserLogin();
      this.router.navigate(["/home/organization"]);
    }
  }
  constructor(
    private router: Router,
    private http : Http,
    private localStorage:LocalStorageService,
    private seesionStorage:SessionStorageService,
    private accountManager:AccountManagerService,
  ) { }

  submit(email,password){
    let jsonData;
    this.http.post("http://homestead.test/api/login",{email:email,password:password}).subscribe((data)=>{
      jsonData = data.json();
      let accesstoken = jsonData.access_token;  
      if(jsonData.result == "success"){
        this.localStorage.store("accessToken",jsonData.access_token);
        this.router.navigate(["home/organization"])
      }
      else{
        alert("wrong credential");
      }
    })
    console.log(jsonData);
    //  this.http.post("http://homestead.test/api/login", {email:email,password:password})
    //     .map((res:Response) => console.log(res.json()));
    //     //.catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
  register(email,password){
    this.http.post("http://homestead.test/api/register",{'email':email,'name':'test','password':password}).subscribe(data=>{
      console.log(data);
    })
  }
}
