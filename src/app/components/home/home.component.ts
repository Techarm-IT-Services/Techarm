import { Component, OnInit } from '@angular/core';
declare var $:any;
declare const myFun:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
  ) { }

  callfun(){
    myFun();
  }
  // getContact(){
  //   this.router.navigateByUrl('/contact');    
  //   window.scrollTo(0, 0)
  // }

  ngOnInit(): void {
    // $(document).ready(function () {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            setting: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            setting: {
              slidesToShow: 3,
            },
          },
        ],
      });
    // });

    
  }

}
