import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { requestData } from '../TestData/TestData';
import {Location} from '@angular/common';
@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  breakdown_elements = [
    {
      name: '30 MB/s line',
      price:"£32 / month",
    },
    {
      name: '50 MB/s line',
      price:"£32 / month",
    },
    {
      name: '30 MB/s line',
      price:"£32 / month",
    }
  ];

  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  constructor( private router: Router,
    private location:Location,) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'request_by', 'request_at', 'status','read_status'];
    this.table = new Table(requestData,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }
  back(){
    this.location.back();
  }

}
