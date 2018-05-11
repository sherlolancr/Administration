import { Injectable, Optional } from '@angular/core';
import {Organization_detail} from '../model/Organization';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { LogDetails } from '../model/Log';
@Injectable()
export class LogService {
  headers:HttpHeaders;
  constructor(
    private http : HttpClient,
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
    @Optional() private logList:LogDetails[]
  ){
    let  _headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = _headers.append('Authorization', this.acc_manager.getAccessToken());
    
   }

  
  get_logDetail(environment_id,category){
    this.logList = [];
    let url;
    if (category == "user"){
      url = "http://homestead.test/api/admin/logs/get-logs-for-user/"
    }
    else if (category == "environment"){
      url = "http://homestead.test/api/admin/logs/get-logs-for-environment/"
    }
    else if (category == "organisation"){
      url = "http://homestead.test/api/admin/logs/get-logs-for-organisation/"
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>(url+environment_id,{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          for (let element of res.data){
            console.log(element)
            this.logList.push(new LogDetails (element.user.name,element.user.id,element.environment.name,element.environment.id,element.created_at,element.description))
          }
          
          resolve();
        },
        msg=>{
          reject();
        }
      )
      
    });
    //.subscribe(data=>{
    //  this.posts = data;
    //  console.log(this.posts + ' this posts');});
    return promise;
  }

  retriveLogData(){
    return this.logList
  }

}
