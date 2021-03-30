import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  currentPage:String

  ngOnInit(): void {
    this.router.events.subscribe( events=>{
      this.currentPage = this.router.url
      console.log(this.currentPage)
    })
    
  }

}
