import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {

  content:any;

  constructor(private util: UtilService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( (urlInfo) =>{
      this.util.getContent(urlInfo.categoria).then( data=>{
      
        this.content = data;
        console.log(this.content)
      })
    })
    
  }

}
