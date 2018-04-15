import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedImage = 'home';
  imgList: string[] = ['home', 'contact', 'gallery', 'services'];

  constructor() { }

  ngOnInit() {

    this.slideImage();

  }

  // Image Sliding Function for Home Background 

  slideImage(): void {
    /* let i = 0;
    setInterval(() => {
      this.selectedImage = this.imgList[(i % this.imgList.length)];
      console.log(this.selectedImage);
      i = i + 1;
    }, 5000); */
  }


}
