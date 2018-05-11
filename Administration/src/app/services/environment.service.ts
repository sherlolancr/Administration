import { Injectable, Optional } from '@angular/core';
import {Organization_detail} from '../model/Organization';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { Environment_list_element, Environment_detail } from '../model/Environment';
@Injectable()
export class EnvironmentService {
  headers:HttpHeaders;
  environmentDeatials:Environment_detail;
 
  constructor(
    private http : HttpClient,
    @Optional() private environments: Environment_list_element[],
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
   ){
    let  _headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = _headers.append('Authorization', this.acc_manager.getAccessToken());
   }

   getEnvironmentList(id){
     this.environments = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/environments/"+id+"/get-environment-list",{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          console.log(res.data)
          for (let element of res.data){
            this.environments.push(new Environment_list_element(element.id,element.name,element.vm_count,element.tier_count,element.total_cost,element.created_at))
          }
          this.environments = res.data;
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

  getEnvironment(id){
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/admin/environment/"+id,{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          this.environmentDeatials = res.data;
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
  getDetail(){
    return this.environmentDeatials;
  }
  updateList(){
    return this.environments;
  }
}
