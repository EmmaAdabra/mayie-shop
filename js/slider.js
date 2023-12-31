$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin: 20,
      nav:true,
      navText: ['<span class="slider-btn prev"><i class="fa-solid fa-caret-left"></i></span>', '<span class="slider-btn next"><i class="fa-solid fa-caret-right"></i><span>'],
      autoplay: true,
      items: 4,
      mouseDrag: true,
      rewind: false,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              loop:true,
              nav: false,
          },
          600:{
              items:2,
              loop:true,
              nav: false,
          },
          768:{
              items:3,
              loop:true,
              nav: false,
          },
          1025:{
              items:4,
              loop:true,
              nav: false,
          }
      }
    });
  });
  