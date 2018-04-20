import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-home',
  templateUrl: './organization-home.component.html',
  styleUrls: ['./organization-home.component.css']
})
export class OrganizationHomeComponent implements OnInit {
  note_content = "Mircosoft is going to pay in one month.Mircosoft is going to pay in one month.Mircosoft is going to pay in one month.";
  edit:boolean
  logs = ["Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018",
  "Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"
,"Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"
,"Microsoft created one VM called xxx at 16th April 2018","Microsoft created one VM called xxx at 16th April 2018"]
  constructor() { }
  ngOnInit() {
    this.edit=false;
  }
  write_note(){
    this.edit = true;
  }
  save_note(editcontent){
    this.edit = false;
    this.note_content = editcontent;
  }
}
