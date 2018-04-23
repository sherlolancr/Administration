import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {style, state, animate, transition, trigger} from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-environment-information',
  templateUrl: './environment-information.component.html',
  styleUrls: ['./environment-information.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),

    ])
  ]
})
export class EnvironmentInformationComponent implements OnInit {

  oid:string   
  eid:string
  conditions:boolean[] = [true,false,false,false]

  constructor(
    private route: ActivatedRoute,
    private _location: Location
  ) {}
  ngOnInit() {
    this.oid = this.route.snapshot.paramMap.get('oid');
    this.eid = this.route.snapshot.paramMap.get('eid');
    console.log(this.oid);
    console.log(this.eid);
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
  back(){
    
    this._location.back();
  }

}
