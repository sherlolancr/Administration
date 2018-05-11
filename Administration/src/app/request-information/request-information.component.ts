import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { requestData } from '../TestData/TestData';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-request-information',
  templateUrl: './request-information.component.html',
  styleUrls: ['./request-information.component.css']
})
export class RequestInformationComponent implements OnInit {

  total_cost: any;
  environment: any;
  requestStatus: string;
  requestFrom:string
  requestId;
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
    this.requestId  =  this.route.snapshot.paramMap.get('rid');
    this.getVariables();
  }
  back(){
    console.log("called");
    this.location.back();
  }

  getVariables(){
    let promise = this.requestService.get_request_information(this.requestId);
    promise.then(
      res=>{
        let details = this.requestService.updateInformation();
        console.log(details)
        this.requestFrom = details.user_email;
        this.requestId = details.product_number
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
        console.log(details)
        for (let v of details.vm_list){
          
          if(v){
            this.vm_breakdown.push(v)
          }
        }
      }
    )

  }

}
