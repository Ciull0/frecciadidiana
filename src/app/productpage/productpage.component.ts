import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  content:any = [];

  constructor(
    private router:ActivatedRoute,
    private util:UtilService
  ) { }

  ngOnInit(): void {

    this.router.params.subscribe( url=>{
      
      this.util.getContent(url.prodotto).then( data=>{
        this.content = data;
      })
      
    })
    
    
  }

}
