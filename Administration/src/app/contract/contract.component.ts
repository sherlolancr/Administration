import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { contractData } from '../TestData/TestData';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table

  @Input() oid:number; 
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'environment_name', 'signed_by','created_time','contract_ended'];
    this.table = new Table(contractData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
}
