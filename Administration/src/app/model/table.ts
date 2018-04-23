import { MatTableDataSource } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Element} from "../TestData/TestData";
import { RouterLink, Router } from "@angular/router";
import { Id_data } from "./id_data";

export class Table{
  displayedColumns : string[]
  dataSource: MatTableDataSource<any>;
  
    constructor(ELEMENT_DATA:any,displayedColumns:string[],private router: Router){
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.displayedColumns = displayedColumns;
    }
    selectRow(id_data:Id_data,category):void{
      let id ;
        if (category == "organization"){
          id = id_data.getOrganizationId();
          this.router.navigate(['organizationProfile/'+id]);
        }
        else if(category == "environment"){
          let eid = id_data.getEnvironmentId();
          let oid = id_data.getOrganizationId();
          this.router.navigate(['environmentProfile/'+oid+'/'+eid]);
        }
        else if (category == "user"){
          this.router.navigate(['userInformation/'+id_data.getUserId()]);
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