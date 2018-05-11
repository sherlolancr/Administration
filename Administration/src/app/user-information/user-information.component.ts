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
import { UserService } from '../services/userlist.service';
import { LogService } from '../services/log.service';


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

  created_at: any;
  isMainAccount: string;
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
  logs;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location:Location,
    public dialog: MatDialog,
    private userService:UserService,
    private logServices:LogService
   ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'vm_count', 'tier_count','total_cost', 'created_at','contract_ended'];
    this.table = new Table(environmentData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
    this.isEdit = false;
    this.user_id  =  this.route.snapshot.paramMap.get('uid');
    let promise = this.userService.get_single_user(this.user_id);
    promise.then(
      res=>{
        
        let details = this.userService.get_user_detail();
        this.user_name = details.name
        this.account = details.email
        this.organization = details.organisation.name;
        this.envrionment_number ;
        if(details.last_activity_date != null){
          this.last_activity = details.last_activity_date.created_at;
        }
        else{
          this.last_activity = details.created_at;
        }
        this.isMainAccount = (details.super_admin == 1) ? "yes" : "no";
        this.created_at = details.created_at;
        this.envrionment_number = details.environments_count;
      }
    )
    let promise_log = this.logServices.get_logDetail(this.user_id,'user');
    promise.then(
      res=>{
        this.logs = this.logServices.retriveLogData();

      }
    )

    this.setUpEnvironmentList();

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
  setUpEnvironmentList(){
    let promise = this.userService.getEnvironmentList(this.user_id);
    promise.then(
      res=>{
        
        this.table = new Table(this.userService.update_environment_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.table.getDataSource();
        
      }
    )
  }
  check(){
    console.log("checked");
    this.isChecked = !this.isChecked
  }
  environmentClick(id){
    this.router.navigate(['environmentProfile/'+id]);
  }

 
}

