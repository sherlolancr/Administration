import { Component, OnInit, Input, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { Router } from '@angular/router';
import { billData } from '../TestData/TestData';
import { BillsService } from '../services/bills.service';
import { Bill_list_element } from '../model/Bill';

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
  constructor(private router: Router,
  private contract_list_service:BillsService,
  ){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'environment_name', 'paid_by','payment_date'];
   
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }

  search (){
    this.serach_submitted = true;
    let promise = this.contract_list_service.getBillList(this.oid);
    promise.then(
      res=>{
        
        this.table = new Table(this.contract_list_service.update_bill_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.table.getDataSource();
        
      }
    )
    this.table = new Table([], this.displayedColumns,this.router);
        
    this.dataSource = this.table.getDataSource();
  }
}
