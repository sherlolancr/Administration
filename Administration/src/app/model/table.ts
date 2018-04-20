import { MatTableDataSource } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Element} from "../TestData/TestData";
import { RouterLink, Router } from "@angular/router";

export class Table{
  displayedColumns : string[]
  dataSource: MatTableDataSource<any>;
  
    constructor(ELEMENT_DATA:any,displayedColumns:string[],private router: Router){
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.displayedColumns = displayedColumns;
    }
    selectRow(row,category):void{
      let id:number ;
      id = row.position;
      console.log(row);
        if (category == "organization"){
          
          this.router.navigate(['organizationProfile/'+id]);
        }
        else if(category == "environment"){
          this.router.navigate(['environmentProfile/'+id]);
        }
    }
    
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    public getDataSource():MatTableDataSource<any>{
      return this.dataSource;
    }
    public getDisplayedColumns(){
      return this.displayedColumns;
    }



}