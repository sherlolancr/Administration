import { Component, OnInit, Input, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { Environment_list_element } from '../model/Environment';
import { EnvironmentService } from '../services/environment.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  @Optional() environments: Environment_list_element[];

  @Input() oid:number; 
  constructor(
    private router: Router,
    private environmentServices:EnvironmentService
  
  ){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'name', 'vm_count', 'tier_count','total_cost', 'created_at','contract_ended'];
    let promise = this.environmentServices.getEnvironmentList(this.oid);
    promise.then(
      res=>{
        
        this.table = new Table(this.environmentServices.updateList(),this.displayedColumns,this.router)
        
        this.dataSource = this.table.getDataSource();
        
      }
    )

    this.table = new Table([],this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }

}
