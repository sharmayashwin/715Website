$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $("header").addClass("nav-fixed");
  } else {
      $("header").removeClass("nav-fixed");
  }
});


$('.navbar .nav-item .nav-link').on('click', function(){
  $('.navbar .nav-item .nav-link').removeClass('active');
  $(this).addClass('active');
});


jQuery(".testimonial-slider").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});