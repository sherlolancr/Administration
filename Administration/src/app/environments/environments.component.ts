import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { environmentData } from '../TestData/TestData';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table

  @Input() oid:number; 
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'environment_name', 'number_of_vm', 'number_of_tier','total_cost', 'created_time','contract_ended'];
    this.table = new Table(environmentData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }

}
