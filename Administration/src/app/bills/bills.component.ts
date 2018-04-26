import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { billData } from '../TestData/TestData';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  
  serach_submitted:boolean;

  conditions = [{title:"Payment date",value:["all time","within a week","within two week","within a month"]}]

  @Input() oid:number; 
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'environment_name', 'paid_by','payment_date'];
    this.table = new Table(billData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }

  search (){
    this.serach_submitted = true;
  }
}
