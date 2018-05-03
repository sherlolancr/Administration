import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {organizationData} from '../TestData/TestData';
import { OrganizationService } from '../services/organization.service';
@Component({
  selector: 'app-organization-home',
  templateUrl: './organization-home.component.html',
  styleUrls: ['./organization-home.component.css']
})
export class OrganizationHomeComponent implements OnInit {
  note_content = "Mircosoft is going to pay in one month.Mircosoft is going to pay in one month.Mircosoft is going to pay in one month.";
  edit:boolean
  organization_id ;
  organization_name;
  main_account;
  next_payment_date;
  next_payment_amount;
  last_activity;
  account_create_date;
  address;

  logs = ["Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018",
  "Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"
,"Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"
,"Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"]





  constructor(
    private route: ActivatedRoute,
    private organizationService:OrganizationService,
  ) { }
  @Input() oid:number;  
  ngOnInit() {
    this.edit=false;
    this.organization_id =  this.route.snapshot.paramMap.get('oid');
    let promise = this.organizationService.getOrganzationDetail(this.organization_id);
    promise.then(
      res=>{
        let details = this.organizationService.getDetails();
        console.log(details)
        this.organization_name = details.name;
        this.account_create_date = details.created_at;
        this.main_account = details.main_account;
        this.address = details.address;
      }
    )
  }
  write_note(){
    this.edit = true;
  }
  save_note(editcontent){
    this.edit = false;
    this.note_content = editcontent;
  }
  close_note(){
    this.edit = false;
  }
  allocate_variables(){
    for (let organization of organizationData){
      if(organization.id == this.organization_id){
        this.main_account = organization.main_account;
        this.last_activity = organization.lastActivity 
        this.organization_name = organization.company_name;
      }
    }
  }
}
