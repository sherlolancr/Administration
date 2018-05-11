import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../services/environment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-environmen-home',
  templateUrl: './environmen-home.component.html',
  styleUrls: ['./environmen-home.component.css']
})
export class EnvironmenHomeComponent implements OnInit {
  eid
  name:string;
  vm_count;
  tier_count;
  user_count;
  total_cost;
  created_at;
  end_at;
  oid;
  logs;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private environmentServices:EnvironmentService,
    private logServices:LogService
  ) { }

  ngOnInit() {
    this.eid = this.route.snapshot.paramMap.get('eid');
    let promise = this.environmentServices.getEnvironment(this.eid);
    promise.then(
      res=>{
        let details = this.environmentServices.getDetail();
        this.name = details.name
        this.vm_count = details.vm_count
        this.tier_count = details.tier_count
        this.created_at = details.created_at
        this.user_count = details.user_count;
        this.total_cost = details.total_cost;
      }
    )
    let promise_log = this.logServices.get_logDetail(this.eid,'environment');
    promise.then(
      res=>{
        this.logs = this.logServices.retriveLogData();

      }
    )


  }

  userClick(id){
    this.router.navigate(['userInformation/'+id]);
  }


}
