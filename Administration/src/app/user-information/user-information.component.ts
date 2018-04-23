import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Table } from '../model/table';
import { ELEMENT_DATA } from '../TestData/TestData';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { OrganizationComponent } from '../organization/organization.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import {style, state, animate, transition, trigger} from '@angular/core';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      


    ])
  ]
})
export class UserInformationComponent implements OnInit {
  isEmailFilled: boolean;
  isNameFilled: boolean;
  displayedColumns : string[]
  dataSource : MatTableDataSource<any>
  table : Table
  isEdit: boolean;
  isChecked: boolean;
 
  constructor(
    private router: Router,
    private location:Location,
    public dialog: MatDialog
   ) { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.table = new Table(ELEMENT_DATA,this.displayedColumns,this.router);
    this.dataSource = this.table.getDataSource();
    this.isEdit = false;
  }
  back(){
    this.location.back();
  
  }
  edit(){
    this.isEdit = true;
  }
  save_edit(checkout){
    console.log(checkout);
    if(this.isChecked){
      this.isEdit = false;
      this.isChecked = false;
      this.isNameFilled = false;
      this.isEmailFilled = false;
    }
  }
  check(){
    console.log("checked");
    this.isChecked = !this.isChecked
  }
}

