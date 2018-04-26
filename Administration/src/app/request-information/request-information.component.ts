import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { requestData } from '../TestData/TestData';

@Component({
  selector: 'app-request-information',
  templateUrl: './request-information.component.html',
  styleUrls: ['./request-information.component.css']
})
export class RequestInformationComponent implements OnInit {

  requestStatus: string;
  requestFrom:string
  requestId;

  @Input() unread:boolean
  constructor( 
    private location:Location,
    private route: ActivatedRoute,
  ) { }

  change_vms = [
    {
      name: 'vm1',
      price:"£400",
    },
    {
      name: 'vm2',
      price:"£400",
    },
    {
      name: 'vm3',
      price:"£400",
    }
  ];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  notes = "test"
  ngOnInit() {
    this.unread = true;
    this.requestFrom = "Simon@Microsoft.com"
    this.requestId  =  this.route.snapshot.paramMap.get('rid');
    this.assignVariables();
  }
  back(){
    console.log("called");
    this.location.back();
  }
  assignVariables(): any {
    for (let request of requestData){
      if (request.id == this.requestId){
        this.requestFrom = request.request_by;
        this.requestStatus = request.status;
        
        break;
      }
    }

  }
}
