import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  constructor(private router: ActivatedRoute, private util: UtilService) { }
  content:any;
  ngOnInit(): void {
    this.util.getContent("parliamo").then( data =>{
      this.content=data;
    })
  }

}
