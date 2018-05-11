import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/request.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-contract-request-information',
  templateUrl: './contract-request-information.component.html',
  styleUrls: ['./contract-request-information.component.css']
})
export class ContractRequestInformationComponent implements OnInit {

  total_cost: any;
  environment: any;
  requestStatus: string;
  requestFrom:string
  contractId;
  vm_breakdown=[];



  @Input() unread:boolean
  constructor( 
    private location:Location,
    private route: ActivatedRoute,
    private requestService:RequestService,
  ) { }


  notes = "test"
  ngOnInit() {
    this.unread = true;
    this.requestFrom = "Simon@Microsoft.com"
    this.contractId  =  this.route.snapshot.paramMap.get('cid');
    this.getVariables();
  }
  back(){
    console.log("called");
    this.location.back();
  }

  getVariables(){
    let promise = this.requestService.get_contract_request_information(this.contractId);
    promise.then(
      res=>{
        let details = this.requestService.updateContractRequestInformation();
        console.log(details)
        this.requestFrom = details.user_email;
        this.contractId = details.product_number
        this.environment = details.environment_name;
        this.total_cost = details.total_cost;
        if(details.status == 1){
          this.requestStatus = "approved"
        }
        else if (details.status == 2){
          this.requestStatus = "unread"
        }
        else if (details.status == 3){
          this.requestStatus = "pending"
        }
        for (let v of details.vm_list){
          console.log(v)
          if(v){
            this.vm_breakdown.push(v)
          }
        }
        console.log(this.vm_breakdown)
      }
    )

  }
}
