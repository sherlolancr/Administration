import { Injectable, Optional } from '@angular/core';
import {Organization_detail} from '../model/Organization';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { Environment_list_element } from '../model/Environment';
import { Contract_list_element, Contract_information } from '../model/Contract';
@Injectable()
export class ContractService {

  headers:HttpHeaders;
  contractInformation;
  constructor(
    private http : HttpClient,
    @Optional() private contracts: Contract_list_element[],
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
   ){
    let  _headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = _headers.append('Authorization', this.acc_manager.getAccessToken());
   }

   getContractList(id){
     this.contracts = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>("http://homestead.test/api/admin/organisation/"+id+"/get-all-contracts-by-organisation",{headers:this.headers}).toPromise().then(
        res=>{
          if(res.result != 'success'){
            alert("something went wrong");
          }
          let count = 0
          for (let element of res.data){
            count++
            this.contracts.push(new Contract_list_element(element.id,element.environment.name,"",element.created_at,""))
          }
          //this.contracts = res.data;
          console.log(res);
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

  getContractInformation(id,type){
    let vm_list = []
    let total_cost = 0
    let url;
    if(type == "contract"){
      url = "http://homestead.test/api/admin/contract-information-byContract/"+id
    }
    else{
      url = "http://homestead.test/api/admin/contract-information-byEnvironment/"+id
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>(url,{headers:this.headers}).toPromise().then(
        res=>{
          console.log(res.data);
          let data = res.data.contract;
          let environment = data.environment
          this.contractInformation = new Contract_information(id,environment.organisation.name,data.cost,data.notes,data.created_at,environment.name,environment.id,data.vm_cost);           
          resolve();
        },
        msg=>{
          reject();
        }
      )

      
    });
   return promise;
  }
  
  update_list(){
    return this.contracts;
  }
  update_information(){
    return this.contractInformation
  }
}
