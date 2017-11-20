import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})



export class ShowlistComponent implements OnInit {
  ngOnInit(){}
}
