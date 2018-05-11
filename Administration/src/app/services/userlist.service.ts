import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/User';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { Environment_list_element } from '../model/Environment';

@Injectable()
export class UserService {
  user_detial: any;
  _headers
  headers
  constructor(
    private http : HttpClient,
    @Optional() private user_list: User[],
    @Optional() private environment_list: Environment_list_element[],
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
  ) {
    this._headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = this._headers.append('Authorization', this.acc_manager.getAccessToken());
   }

  get_user_list(id,isOrganisation){
    
    this.user_list = []
    let url ="";
    if(isOrganisation){
      url="http://homestead.test/api/organisation/";
    }
    else{
      url= "http://homestead.test/api/environment/"
    }
    let promise = new Promise((resolve,reject)=>{
      
      this.http.get<any>(url+id+"/get-all-users",{headers:this.headers}).toPromise().then(
        res=>{

          for (let element of res.data.users){
            let user_role;
            user_role = "None"
            if(isOrganisation){
              if(element.roles.length>0){
                user_role = element.roles[0].name
              }
            }
            else{
                user_role = element.role.name
            }
            let last_activity_date;
            if(element.last_activity_date[0] != null){
              
              last_activity_date = (element.last_activity_date)[0].created_at;
            }
            console.log(element)
            let company_name;
            if(!isOrganisation){
              company_name = element.organisation.name
            }
            this.user_list.push(new User(element.id,element.name,element.email,user_role,element.status,last_activity_date,company_name,element.environments_count))
          }
          //this.user_list = res.data.users;
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
  get_user_by_condition(condition){
    this.user_list = []
    let url ="";
    

    let promise = new Promise((resolve,reject)=>{
      
      this.http.get<any>("http://homestead.test/api/user/get-users",{headers:this.headers, params: new HttpParams().set('name',condition.name)
      .set("last_activity",condition.active_date).set("role",condition.role).set("environment_related",condition.Environmen_Related) }
    ).toPromise().then( 
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          console.log(res);
          for (let element of res.data.users){
            let user_role;
            user_role = "None"
            if(element.roles.length>0){
                user_role = element.roles[0].name
            }
            let last_activity_date;
            if(element.last_activity_date[0] != null){
              last_activity_date = (element.last_activity_date)[0].created_at;
            }
            
            this.user_list.push(new User(element.id,element.name,element.email,user_role,element.status,last_activity_date,"",element.environments_count))
          }
          //this.user_list = res.data.users;
          resolve();
        },
        msg=>{
          reject();
        }
      )
      
    });
    return promise;
  }
  get_single_user(id){
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/admin/user/"+id,{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          this.user_detial = res.data.users;
          console.log(res.data.users)
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
  getEnvironmentList(uid){
    this.environment_list = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/admin/user/getEnvironment/"+uid,{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          console.log(res.data)
          for (let element of res.data){
            this.environment_list.push(new Environment_list_element(element.id,element.name,element.vm_count,element.tier_count,element.total_cost,element.created_at))
          }
          this.environment_list = res.data;
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
  update_list(){
    return this.user_list;
  }
  update_environment_list(){
    return this.environment_list;
  }
  get_user_detail(){
    return this.user_detial
  }
}
