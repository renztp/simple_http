import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'http://localhost:8080/index';
  posts:any = this.http.get(this.ROOT_URL).subscribe(data => {
  	this.posts = data;
  });

}

