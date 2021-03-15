import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  content:any = [];
  hero:any = {};

  constructor(
    private router:ActivatedRoute,
    private util:UtilService
  ) { }

  ngOnInit(): void {

      
    this.util.getContent("home").then( data=>{
      
      this.content = data;
      //console.log(data);

      this.hero.pic = this.content.cover;
      this.hero.title = this.content.title;
      //console.log(this.hero);



    })
      

  }

}
