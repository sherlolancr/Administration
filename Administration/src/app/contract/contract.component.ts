import { Component, OnInit, Input, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { AccountManagerService } from '../account-manager.service';
import { ContractService } from '../services/contract.service';
import { Contract_list_element } from '../model/Contract';

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
  constructor(
    private router: Router,
    private contract_list_service:ContractService,
    @Optional() private contract_list:Contract_list_element[]
  ){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'environment_name', 'signed_by','created_at','contract_ended'];
    this.contract_list = [];
    let promise = this.contract_list_service.getContractList(this.oid);
    promise.then(
      res=>{
        
        this.table = new Table(this.contract_list_service.update_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.table.getDataSource();
        
      }
    )
    this.table = new Table([], this.displayedColumns,this.router);
        
    this.dataSource = this.table.getDataSource();

    this.table = new Table([],this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
}
