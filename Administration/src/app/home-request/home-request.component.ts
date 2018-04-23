import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../model/table';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from '../TestData/TestData';
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
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  changeRequestSelected = true;
  newRequestSelected = false;
  
  @Input() oid:number; 
  constructor(private router: Router){}

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.table = new Table(ELEMENT_DATA,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
  }


  applyFilter(filterValue: string) {
    this.table.applyFilter(filterValue);
  }
  newRequest(){
    this.newRequestSelected = true;
    this.changeRequestSelected =false;
  }
  changeRequest(){
    this.newRequestSelected = false;
    this.changeRequestSelected = true;
  }

}
