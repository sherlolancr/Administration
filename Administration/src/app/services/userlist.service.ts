import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/User';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';

@Injectable()
export class UserlistService {
  _headers
  headers
  constructor(
    private http : HttpClient,
    @Optional() private user_list: User[],
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

            this.user_list.push(new User(element.id,element.name,element.email,user_role,element.status,element.updated_at))
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
      
      this.http.get<any>("http://homestead.test/api/user/get-user",{headers:this.headers, params: new HttpParams().set('name',condition.name)
      .set("last_activity",condition.active_date).set("role",condition.role).set("environment_related",condition.Environmen_Related) }
    ).toPromise().then( 
        res=>{
          console.log(res);
          for (let element of res.data.users){
            let user_role;
            user_role = "None"
            if(element.roles.length>0){
                user_role = element.roles[0].name
            }
            
            
            this.user_list.push(new User(element.id,element.name,element.email,user_role,element.status,element.updated_at))
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
  update_list(){
    return this.user_list;
  }
}
