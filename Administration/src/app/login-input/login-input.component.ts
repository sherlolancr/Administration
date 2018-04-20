import { Component, OnInit } from '@angular/core';
import { LoginInformation } from '../login-information';
import { Router, ActivatedRoute } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {
  login_information:LoginInformation ;
  onClickMe(username:string,password:string){
    this.login_information = new LoginInformation(username,password);
    
    this.router.navigate([HomepageComponent]);
  }
  ngOnInit() {
  }
  constructor(
    private router: Router) { }
}
