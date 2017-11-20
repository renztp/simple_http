import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'http://localhost:8080/index';
  posts:any = this.http.get(this.ROOT_URL).subscribe(data => {
  	this.posts = data;
  });

}