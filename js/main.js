$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ['<img src="img/slide-left.png">','<img src="img/slide-right.png">' ],
    responsive:{
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  });
});