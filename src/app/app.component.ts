import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



theData: any;

  constructor(private http: HttpClient, private data: DataService) {
  }

  getPosts(){
  	this.theData = this.data.posts;
  }


	
}
