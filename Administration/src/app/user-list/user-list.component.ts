import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { userData } from '../TestData/TestData';

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
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns =['id', 'user_name', 'email_address', 'company_name','lastActivity','role','related_environment'];
    this.table = new Table(userData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
}
