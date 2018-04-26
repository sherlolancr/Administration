
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-safenet-policy',
  templateUrl: './safenet-policy.component.html',
  styleUrls: ['./safenet-policy.component.css']
})
export class SafenetPolicyComponent implements OnInit {
  isEdit: boolean;
  @Input() oid:number; 
  constructor() { }

  ngOnInit() {
  }
  edit(){
    this.isEdit = true;
  }
  save(){
    this.isEdit = false;
  }
  cancel(){
    this.isEdit = false;
  }
}
