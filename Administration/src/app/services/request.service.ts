import { Injectable, Optional } from '@angular/core';
import {Organization_detail} from '../model/Organization';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountManagerService } from '../account-manager.service';
import { Environment_list_element } from '../model/Environment';
import { Contract_list_element, Contract_request, VmInformation_contract } from '../model/Contract';
import { ChangeRequest_list_element, VmInformation, ChangeRequest } from '../model/ChangeRequest';
@Injectable()
export class RequestService {


  headers:HttpHeaders;
 
  constructor(
    private http : HttpClient,
    
    @Optional() private crs:ChangeRequest_list_element[],
    @Optional() private contracts:ChangeRequest_list_element[],
    private localStorage:LocalStorageService,
    private acc_manager:AccountManagerService,
   ){
    let  _headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = _headers.append('Authorization', this.acc_manager.getAccessToken());
  }
  contract_list;
  cr_list;
  search_result;
  request_list_of_contract;
  change_request_information;
  contract_resquest_information;
  getRequestList(category){
    let url
    if(category == "changeRequests"){
      url = "http://homestead.test/api/admin/get-change-requests-list"
    }
    else if(category == "contracts")
    {
      url = "http://homestead.test/api/admin/contract-request-list"
    }
    else{
      console.log("request service went wrong")
      alert("something went wrong");
    }

    this.contract_list = []
    this.cr_list = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>(url,{headers:this.headers}).toPromise().then(
        res=>{
          
          for (let element of res.data){
            //console.log(element)
            let status = 'New'
            let read_status = 'Unread'
            let environment = ""
            let username;
            let result_status
            result_status= this.getstatus(element.status)
            status = result_status[0]
            read_status = result_status[1]
            if(element.environment != null){
              environment = element.environment.name;

              username = element.environment.organisation.name;

            }
            if(category == "changeRequests"){

              this.cr_list.push(new ChangeRequest_list_element(element.purchase_order_number,username,element.created_at,environment,status,read_status))
            }
            else{
              
              this.contract_list.push(new ChangeRequest_list_element(element.id,username,element.created_at,environment,status,read_status))
            }
            
          }
          //this.contracts = res.data;
          
          resolve();
        },
        msg=>{
          reject();
        }
      )

      
    });
   return promise;
  }

  search_list(condition){
    this.search_result = []
    let url ="";
    
    console.log(condition)
    let product_order = condition.po;
    let type = condition.Type
    if(type == "cr"){
      url = "http://homestead.test/api/admin/get-change-requests-list-search"
    }
    else if(type == "contract")
    {
      url = "http://homestead.test/api/admin/contract-request-list-search"
    }
    let promise = new Promise((resolve,reject)=>{
      
      this.http.get<any>(url,{headers:this.headers, params: new HttpParams().set('po',product_order) }
    ).toPromise().then( 
        
        res=>{
          console.log("it returns");
          for (let element of res.data){
            console.log(element)
            let status = 'New'
            let read_status = 'Unread'
            let environment = ""
            let username;
            let result_status
            result_status= this.getstatus(element.status)
            status = result_status[0]
            read_status = result_status[1]
            if(element.environment != null){
              environment = element.environment.name;

              username = element.environment.organisation.name;

            }
            if(type == "cr"){

              this.search_result.push(new ChangeRequest_list_element(element.purchase_order_number,username,element.created_at,environment,status,read_status))
            }
            else{
              
              this.search_result.push(new ChangeRequest_list_element(element.id,username,element.created_at,environment,status,read_status))
            }

            
          }
          resolve();
        },
        msg=>{
          reject();
        }
      )
      
    });
    console.log("here")
    return promise;
  }  

  get_request_information(id){
    let vm_list = []
    let total_cost = 0
    let url;
 
    url = "http://homestead.test/api/admin/changeRequest-detail/";

    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>(url+id,{headers:this.headers}).toPromise().then(
        res=>{
          let vms = res.data.vms; 
          let request = res.data;
          console.log(res)

          for(let i of vms){
            let vm_id = i.parent_db_item_id
            if (!vm_list[vm_id] ){
              
              vm_list[vm_id] = new VmInformation(i.virtual_machine.name)
            }
            vm_list[vm_id].setVmBreakdown(i)
  
  
          }
          console.log(vm_list)
          for (let i of vm_list){
            if(i){
              total_cost+=i.calculateCost()
            }
          }
           this.change_request_information = new ChangeRequest(request.po,request.environment,request.user,total_cost,vm_list,request.status)
         

          console.log(vm_list)
          resolve();
        },
        msg=>{
          reject();
        }
      )

      
    });
   return promise;
  }

  get_contract_request_information(id){
    let vm_list = []
    let total_cost = 0
    let url;

    url = "http://homestead.test/api/admin/get-contract-request-admin/"
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>(url+id,{headers:this.headers}).toPromise().then(
        res=>{
          let vms = res.data.vms; 
          let request = res.data;
          console.log(res)
          for(let i of vms){
            let vm_id = i.id
            let vm =new VmInformation_contract(i.name,i.cost)
            vm.setVmBreakDown(i)
            vm_list.push(vm)
            total_cost += i.cost

          }
          this.contract_resquest_information = new Contract_request(request.po,request.environment,request.user,total_cost,vm_list,request.status)
         
          resolve()

        },
        msg=>{
          reject();
        }
      )

      
    });
   return promise;
  }

  get_request_by_envirionment(id){
    let url
    url = "http://homestead.test/api/admin/get-change-requests-admin/"+id
    this.request_list_of_contract = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get<any>(url,{headers:this.headers}).toPromise().then(
        res=>{
          console.log(res)
          for (let element of res.data){
            console.log(element)
            let status = 'New'
            let read_status = 'Unread'
            let environment = ""
            let username;
            let result_status
            result_status= this.getstatus(element.status)
            status = result_status[0]
            read_status = result_status[1]
            if(element.environment != null){
              environment = element.environment.name;

              username = element.environment.organisation.name;

            }

            this.request_list_of_contract.push(new ChangeRequest_list_element(element.purchase_order_number,username,element.created_at,environment,status,read_status))

            
          }
          //this.contracts = res.data;
          
          resolve();
        },
        msg=>{
          reject();
        }
      )

      
    });
   return promise;
  }


  update_contract_list(){
    return this.contract_list;
  }
  update_cr_list(){
    return this.cr_list;
  }
  update_search_list(){
    console.log("the seach result")
    console.log(this.search_result)
    return this.search_result
  }
  getstatus(db_status): any {
    let status
    let read_status
    if(db_status == 1){
    
      status = 'approved';
      read_status = 'read'
    }
    else if(db_status == 2){
      status = 'new';
      read_status = 'unread'
    }
    else if(db_status == 3){
      status = 'pending';
      read_status = 'read'
    }

    return [status,read_status];
  }

  update_cr_list_of_contract(){
    return this.request_list_of_contract
  }
  updateInformation(){
    return this.change_request_information
  }
  updateContractRequestInformation(){
    return this.contract_resquest_information;
  }


}
