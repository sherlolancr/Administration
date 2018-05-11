import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { requestData } from '../TestData/TestData';
import {Location} from '@angular/common';
import { ContractService } from '../services/contract.service';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  
  contractId: any;
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

  vm_cost;
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  cost
  note;
  id;
  organisation_name;
  created_at:string;
  environment_name:string;


  @Input() eid;
  
  constructor( private router: Router,
    private location:Location,
    private route: ActivatedRoute,
    private contractService:ContractService,
    private requestService: RequestService,
  
  ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'request_by', 'request_at', 'status','read_status'];
    this.contractId  =  this.route.snapshot.paramMap.get('cid');
    console.log(this.contractId)
    if(this.contractId == null){
      this.setVariablesByEnvironment()
      this.setList(this.eid)
    }
    else{
      this.setVariablesByContract();
    }
    
    this.table = new Table([],this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }
  back(){
    this.location.back();
  }
  setVariablesByContract(){
    let promise = this.contractService.getContractInformation(this.contractId,'contract');
    promise.then(
      res=>{
        let details = this.contractService.update_information();
        this.setVariables(details)
        console.log("the detail")
        console.log(details)
        this.setList(details.environment_id)
      }
    )
  }
  setVariablesByEnvironment(){
    let promise = this.contractService.getContractInformation(this.eid,'environment');
    promise.then(
      res=>{
        let details = this.contractService.update_information();
        this.setVariables(details)
        console.log("the detail")
        console.log(details)
      }
    )
  }

  setVariables(details){
    this.id = this.contractId;
    this.cost = details.cost;
    this.organisation_name = details.organisation_name;
    this.note = details.note
    this. created_at = details.created_at
    this.environment_name = details.environment_name; 
    this.vm_cost = details.vm_cost
    console.log(this.vm_cost)   
  }
  setList(id: number): any {
    let promise = this.requestService.get_request_by_envirionment(id);
    promise.then(
      res=>{
        this.table = new Table(this.requestService.update_cr_list_of_contract(),this.displayedColumns,this.router)
        console.log(this.requestService.update_cr_list_of_contract())
        this.dataSource = this.table.getDataSource();
      }
    )
  }
}
