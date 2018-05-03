import { Component, OnInit, Input, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { userData,userDataTest } from '../TestData/TestData';
import { TableFormatComponent } from '../table-format/table-format.component';
import { UserlistService } from '../services/userlist.service';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  
})
export class UsersComponent implements OnInit {

  [x: string]: any;
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  serach_submitted:boolean;
  searchName = "";

  chosen_condition = {active_date:"all_time",role:"super_admin",Environmen_Related:"all"}
  conditions = [{title:"active date",value:["all time","within a week","within two week","within a month"]},
  {title:"role",value:["Super Admin","Admin","Finance","Consulting","Build","No Access"]},
  {title:"Environmen Related",value:["All numbers","< 5","< 10",">= 10"]}]
  @Input() oid:number; 
  
  constructor(
    private router: Router,
    private user_list_service:UserlistService,
    @Optional() private user_list : User[],
  
  
  ){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'name', 'email_address','updated_at','role','related_environment'];

    this.serach_submitted = false;
  }


  search (){
    this.serach_submitted = true;

    this.chosen_condition["name"] = this.searchName;

    console.log(this.chosen_condition)
    this.user_list = [];
    let promise = this.user_list_service.get_user_by_condition(this.chosen_condition);
    promise.then(
      res=>{
        this.table = new Table(this.user_list_service.update_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.table.getDataSource();
        
      }
    )
    this.table = new Table([],this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();

    //TableFormatComponent.updateUserStatus.next(true);
  }
  change_condition(event,condition){
    this.chosen_condition[condition.title.replace(" ","_",2)] = event.target.value
  }
  input(event){
    this.searchName = event.target.value;
  }
}
