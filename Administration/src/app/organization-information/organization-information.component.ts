import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatToolbarModule,MatToolbarRow } from '@angular/material/toolbar';
import {style, state, animate, transition, trigger} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-information',
  templateUrl: './organization-information.component.html',
  styleUrls: ['./organization-information.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),

    ])
  ]
})
export class OrganizationInformationComponent implements OnInit {
  organization_id 

  conditions:boolean[] = [false,false,true,false,false]


  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.organization_id =  this.route.snapshot.paramMap.get('oid');
    console.log(this.organization_id);
  }

  changeContent(id:number){
    let index = 0
    for (let i of this.conditions){
      if (id == index){
        this.conditions[index] = true;
        console.log("i is "+ index );
      }
      else{
        this.conditions[index] = false;
      }
      index ++
    }
    console.log(this.conditions)
  }

}
