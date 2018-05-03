import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import {DataSource} from '@angular/cdk/collections'
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';
//import {organizationData} from '../TestData/TestData';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { Id_data } from '../model/id_data';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import {OrganizationService} from '../services/organization.service';
import { AccountManagerService } from '../account-manager.service';

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

  constructor(
  private router: Router,
  private http:HttpClient,
  private tokenExtractor: HttpXsrfTokenExtractor,
  private organizationService:OrganizationService,
  private accountmanager:AccountManagerService
  ){}

  ngOnInit(): void {
    
      this.displayedColumns = ['id', 'name', 'main_account', 'number_of_user' , 'updated_at'];
      let promise = this.organizationService.getOrganizations();
      promise.then(
        res=>{
          this.table = new Table(this.organizationService.updateOrgs(),this.displayedColumns,this.router)
          
          this.dataSource = this.table.getDataSource();
        }
      )
//      this.table = new Table([], this.displayedColumns,this.router);
          
  //    this.dataSource = this.table.getDataSource();
  
    
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }

}



