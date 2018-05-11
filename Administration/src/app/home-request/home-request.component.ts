import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../model/table';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { requestData,contractRequestData } from '../TestData/TestData';
import {style, state, animate, transition, trigger} from '@angular/core';
import { RequestService } from '../services/request.service';
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
  changeRequest_table : Table
  search_table:Table
  searchSource:MatTableDataSource<any>

  changeRequestSelected = false;

  conditions = [{title:"Request date",value:["all time","within a week","within two week","within a month"]},{title:"Type",
  value:["contract","cr"]}]

  chosen_condition = {Request_date:"all_time",Type:"contract"}
  searchPoCondition = "";

  @Input() oid:number; 
  constructor(
  
  private router: Router,
  private requestService:RequestService,
  ){}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'request_by', 'request_at', 'environment_name','status','read_status'];


    this.setContractTable();
    this.setRequestTable();

    this.changeRequest_table = new Table([],this.displayedColumns,this.router);
    this.dataSource = this.changeRequest_table.getDataSource();
    this.contractTable = new Table([],this.displayedColumns,this.router);
    this.contractDataSource = this.contractTable.getDataSource();

    this.searchSelected =false;

  }
  setContractTable(){
    let promise = this.requestService.getRequestList("contracts");
    promise.then(
      res=>{
        this.contractTable = new Table(this.requestService.update_contract_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.contractTable.getDataSource();
      }
    )
  }
  setRequestTable(){
    let promise = this.requestService.getRequestList("changeRequests");
    promise.then(
      res=>{
      
        this.changeRequest_table = new Table(this.requestService.update_cr_list(),this.displayedColumns,this.router)
        
        this.dataSource = this.changeRequest_table.getDataSource();
      }
    )
  }

  applyFilter(filterValue: string) {
    this.contractTable.applyFilter(filterValue);
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
    this.chosen_condition["po"] = this.searchPoCondition;
    let promise = this.requestService.search_list(this.chosen_condition);
    promise.then(
      res=>{
      
        this.search_table = new Table(this.requestService.update_search_list(),this.displayedColumns,this.router)
        
        this.searchSource = this.search_table.getDataSource();
      }
    )

    this.search_table = new Table([],this.displayedColumns,this.router);
    this.searchSource = this.search_table.getDataSource();
  }
  change_condition(event,condition){
    this.chosen_condition[condition.title.replace(" ","_")] = event.target.value
  }
  input(event){
    this.searchPoCondition = event.target.value;
  }
}
