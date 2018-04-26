import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { userData,userDataTest } from '../TestData/TestData';
import { TableFormatComponent } from '../table-format/table-format.component';

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
  
  conditions = [{title:"last active date",value:["all time","within a week","within two week","within a month"]},
  {title:"Role",value:["Super Admin","Admin","Finance","Consulting","Build","No Access"]},
  {title:"Environmen Related",value:["All numbers","< 5","< 10",">= 10"]}]
  @Input() oid:number; 
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'user_name', 'email_address', 'company_name','lastActivity','role','related_environment'];
    this.table = new Table(userData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
    this.count = 1;
    this.serach_submitted = false;
  }


  search (){
    this.serach_submitted = true;
    if(this.count == 2){
      this.table = new Table(userDataTest,this.displayedColumns,this.router);
      
      console.log("comes in ");
    }
    TableFormatComponent.updateUserStatus.next(true);
    this.count ++;
  }
}
