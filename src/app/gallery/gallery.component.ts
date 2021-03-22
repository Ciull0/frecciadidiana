import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() data
  mainpic
  constructor() { }

  ngOnInit(): void {
    this.mainpic = this.data.cover;
  }

  changePic(imgNew:any) {
    this.mainpic = imgNew;
  }

}
