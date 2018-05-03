
import { Component,Input, OnInit, ViewChild, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Table } from '../model/table';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Id_data } from '../model/id_data';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-table-format',
  templateUrl: './table-format.component.html',
  styleUrls: ['./table-format.component.css']
})
export class TableFormatComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if(this.table){
      this.dataSource = this.table.getDataSource();
      this.displayedColumns = this.table.getDisplayedColumns();
      console.log(this.dataSource)
      this.dataSource.sort = this.sort;
      this.id_data = new Id_data
    }
  }
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  id_data:Id_data
  public static updateUserStatus: Subject<boolean> = new Subject();
  
  @Input() table:Table;  
  @Input() category:String;
  @Input() oid:number;



  @Input() isOrganization :boolean;
  @Input() isUser:boolean;
  @Input() isEnvironment:boolean;
  @Input() isContract:boolean;
  @Input() isBill:boolean;
  @Input() isRequest:boolean;
  
  
  constructor() {

   }
  
  ngOnInit() {
    /*this.dataSource = this.table.getDataSource();
    this.displayedColumns = this.table.getDisplayedColumns();
    this.id_data = new Id_data*/
  }

  @ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  /*ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }*/

  selectRow(row):void{
    let id = row.id;
    if(this.isOrganization){
      this.id_data.setOrganizationId(id);

    }
    else if(this.category == "environment"){
      this.id_data.setOrganizationId(this.oid);
      this.id_data.setEnvironmentId(id);
    }
    else if (this.category == "user"){
      this.id_data.setUserId(id);
    }
    else if(this.category == "request"){
      this.id_data.setRequestId(id);
    }
    else if (this.category == "contract"){
      this.id_data.setContractId(id);
    }
    else if (this.category == "bill"){
      this.id_data.setBillId(id);
    }
    this.table.selectRow(this.id_data,this.category);
  }
}
