import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { Table } from '../model/table';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-table-format',
  templateUrl: './table-format.component.html',
  styleUrls: ['./table-format.component.css']
})
export class TableFormatComponent implements OnInit {
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  
  @Input() table:Table;  
  @Input() category:String;

  constructor() { }
  
  ngOnInit() {
    this.dataSource = this.table.getDataSource();
    this.displayedColumns = this.table.getDisplayedColumns();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log.apply(23);
  }

  selectRow(row):void{
    this.table.selectRow(row,this.category);
  }
}
