import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { environmentData,userData } from '../TestData/TestData';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { OrganizationComponent } from '../organization/organization.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import {style, state, animate, transition, trigger} from '@angular/core';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      


    ])
  ]
})
export class UserInformationComponent implements OnInit {

  last_activity: string;
  envrionment_number: number;
  organization: string;
  account: string;
  isEmailFilled: boolean;
  isNameFilled: boolean;
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  isEdit: boolean;
  isChecked: boolean;
 

  user_id;
  user_name;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location:Location,
    public dialog: MatDialog
   ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'environment_name', 'number_of_vm', 'number_of_tier','total_cost', 'created_time','contract_ended'];
    this.table = new Table(environmentData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
    this.isEdit = false;
    this.user_id  =  this.route.snapshot.paramMap.get('uid');
    console.log(this.user_id)
    this.assignVariables()
  }
  back(){
    this.location.back();
  
  }
  edit(){
    this.isEdit = true;
  }
  save_edit(checkout){
    console.log(checkout);
    if(this.isChecked){
      this.isEdit = false;
      this.isChecked = false;
      this.isNameFilled = false;
      this.isEmailFilled = false;
    }
  }
  check(){
    console.log("checked");
    this.isChecked = !this.isChecked
  }

  assignVariables(): any {
    for (let user of userData){
      if(user.id == this.user_id){
        this.user_name = user.user_name;
        this.account = user.email_address;
        this.organization = user.company_name;
        this.envrionment_number = user.related_environment;
        this.last_activity = user.lastActivity;
      }
    }
  }
}

