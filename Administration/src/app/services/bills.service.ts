import { Injectable, Optional } from '@angular/core';
import {Organization_detail} from '../model/Organization';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { Environment_list_element } from '../model/Environment';
import { Contract_list_element, Contract_information } from '../model/Contract';
import { Bill_list_element } from '../model/Bill';

@Injectable()
export class BillsService {

  headers:HttpHeaders;
  bills;
  constructor(
    private http : HttpClient,
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
   ){
    let  _headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = _headers.append('Authorization', this.acc_manager.getAccessToken());
   }

   getBillList(id){
    this.bills = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/admin/get-bills/"+id,{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          let count = 0
          for (let element of res.data){
            count++
            this.bills.push(new Bill_list_element(element.id,element.environment.name,element.user.name,element.created_date))
          }

          console.log(res);
          resolve();
        },
        msg=>{
          reject();
        }
      )
      
    });
    return promise;
   }

   update_bill_list(){
     return this.bills
   }

}
