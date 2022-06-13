import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css']
})
export class CustomSliderComponent implements OnInit {

  index = 0;
  value = true;
  imgSrc = [
    "../../assets/images/image1.jpg",
    "../../assets/images/image2.jpg",
    "../../assets/images/image3.jpg",
    "../../assets/images/image4.jpg",
    "../../assets/images/image5.jpg",
    "../../assets/images/image6.jpg",
    "../../assets/images/image7.jpg",
    "../../assets/images/image8.jpg",
    "../../assets/images/image9.jpg",
    "../../assets/images/image10.jpg",
  ]
  cnstructor() { }

  ngOnInit() {
  }

  increase() {
    if (this.index < (this.imgSrc.length - 1)) {
      this.index++;
    }
  }

  decrease() {
    if (this.index > 0) {
      this.index--;
    } 
  }
}
