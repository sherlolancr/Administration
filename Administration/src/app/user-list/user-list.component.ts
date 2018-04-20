import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from '../TestData/TestData';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table


  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.table = new Table(ELEMENT_DATA,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
}
