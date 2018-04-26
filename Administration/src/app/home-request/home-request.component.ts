import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../model/table';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { requestData,contractRequestData } from '../TestData/TestData';
import {style, state, animate, transition, trigger} from '@angular/core';
@Component({
  selector: 'app-home-request',
  templateUrl: './home-request.component.html',
  styleUrls: ['./home-request.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.3s ease-in')
      ]),
    ])
  ]
})
export class HomeRequestComponent implements OnInit {
  serach_submitted: boolean;
  searchSelected: boolean;
  contractDataSource: MatTableDataSource<any>;
  contractTable: Table;
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table

  changeRequestSelected = false;

  conditions = [{title:"Request date",value:["all time","within a week","within two week","within a month"]}]
  @Input() oid:number; 
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'request_by', 'request_at', 'status','read_status'];
    this.table = new Table(requestData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
    this.contractTable = new Table(contractRequestData,this.displayedColumns,this.router);
    this.contractDataSource = this.contractTable.getDataSource();
    this.searchSelected =false;
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
  newRequest(){
    this.changeRequestSelected =false;
    this.searchSelected = false;
  }
  changeRequest(){
    this.changeRequestSelected = true;
    this.searchSelected = false;
  }
  searchPo(){
    this.searchSelected = true;
  }
  search(){
    this.serach_submitted = true;
  }
}
