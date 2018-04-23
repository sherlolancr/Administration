import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections'
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';
import {ELEMENT_DATA} from '../TestData/TestData';
import { MatTableDataSource, MatSort } from '@angular/material';
import {Element} from '../TestData/TestData';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { Id_data } from '../model/id_data';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  id_data:Id_data

  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.table = new Table(ELEMENT_DATA,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
    this.id_data = new Id_data();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }

}



