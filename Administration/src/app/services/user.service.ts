import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UserService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) {

  }


}
