import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {organizationData} from '../TestData/TestData';
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
  next_payment;
  last_activity;


  logs = ["Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018",
  "Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"
,"Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"
,"Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"]





  constructor(
    private route: ActivatedRoute,
  ) { }
  @Input() oid:number;  
  ngOnInit() {
    this.edit=false;
    this.organization_id =  this.route.snapshot.paramMap.get('oid');
    this.allocate_variables();
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
