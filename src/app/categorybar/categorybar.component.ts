import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorybar',
  templateUrl: './categorybar.component.html',
  styleUrls: ['./categorybar.component.css']
})
export class CategorybarComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
