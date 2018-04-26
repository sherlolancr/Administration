import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-bill-information',
  templateUrl: './bill-information.component.html',
  styleUrls: ['./bill-information.component.css']
})
export class BillInformationComponent implements OnInit {
  breakdown_elements = [
    {
      name: '30 MB/s line',
      price:"£32 / month",
    },
    {
      name: '50 MB/s line',
      price:"£32 / month",
    },
    {
      name: '30 MB/s line',
      price:"£32 / month",
    }
  ];

  constructor(
    private location:Location,
  ) { }

  ngOnInit() {
  }
  back(){
    this.location.back();
  }
}
