import { Component, OnInit, Input, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { userData, User } from '../TestData/TestData';
import { UserService } from '../services/userlist.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table

  @Input() oid:number; 
  @Input() eid:number; 
  @Input() forEnvironment:boolean; 
  constructor(
    private router: Router,
    private user_list_service:UserService,
    @Optional() private user_list : User[],
  ){}

  ngOnInit(): void {

    this.displayedColumns =['id', 'name', 'email_address', 'company_name','updated_at','role','related_environment'];
    this.user_list = [];
    let promise
    if (this.forEnvironment){
      promise = this.user_list_service.get_user_list(this.eid,false);
    }
    else{
      promise = this.user_list_service.get_user_list(this.oid,true);
    }
    promise.then(
      res=>{
        this.table = new Table(this.user_list_service.update_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.table.getDataSource();
        
      }
    )
    this.table = new Table([], this.displayedColumns,this.router);
        
    this.dataSource = this.table.getDataSource();

  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
}
