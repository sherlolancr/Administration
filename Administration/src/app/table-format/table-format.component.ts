import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { Table } from '../model/table';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Id_data } from '../model/id_data';

@Component({
  selector: 'app-table-format',
  templateUrl: './table-format.component.html',
  styleUrls: ['./table-format.component.css']
})
export class TableFormatComponent implements OnInit {
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  id_data:Id_data
  isO = false;
  @Input() table:Table;  
  @Input() category:String;
  @Input() oid:number;
  constructor() { }
  
  ngOnInit() {
    this.dataSource = this.table.getDataSource();
    this.displayedColumns = this.table.getDisplayedColumns();
    this.id_data = new Id_data
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log.apply(23);
  }

  selectRow(row):void{
    console.log(this.category)
    let id = row.position;
    if(this.category == "organization"){
      this.id_data.setOrganizationId(id);
      console.log(this.id_data.getOrganizationId());

    }
    else if(this.category == "environment"){
      this.id_data.setOrganizationId(this.oid);
      this.id_data.setEnvironmentId(id);
    }
    else if (this.category == "user"){
      console.log(123)
      this.id_data.setUserId(id);
    }
    this.table.selectRow(this.id_data,this.category);
  }
}
