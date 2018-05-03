import { Injectable, Optional } from '@angular/core';
import {Organization_detail, Organization_list_element} from '../model/Organization';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { templateJitUrl } from '@angular/compiler';
@Injectable()
export class OrganizationService {
  headers:HttpHeaders;
  organizationDetail:Organization_detail;
 
  constructor(
    private http : HttpClient,
    
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
    @Optional() private organizations: Organization_list_element[]
   )
   
  { 
    let  _headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = _headers.append('Authorization', this.acc_manager.getAccessToken());
  }
  getOrganizations(){
    this.organizations = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/organisation/get-all-organizations",{headers:this.headers}).toPromise().then(
        res=>{
          console.log(res);
          for (let element of res.data){
            let main_account;
            if(element.users.length>0){
              main_account = element.users[0].email
            }
            else{
              main_account = "None"
            }
            this.organizations.push(new Organization_list_element(element.id,element.name,element.updated_at,main_account,element.users_count))
          }
          //this.organizations = res.data;
          console.log("test");
          console.log(this.organizations);
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

  getOrganzationDetail(id){
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/organisation/"+id+"/get-organisation-detail",{headers:this.headers}).toPromise().then(
        res=>{
          this.organizationDetail = res.data;
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

  updateOrgs(){
    return this.organizations;
  }
  getDetails(){
    return this.organizationDetail;
  }
}
