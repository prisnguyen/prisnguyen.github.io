$(function() {  
  var scroll = $(document).scrollTop();
  var navHeight = $('.header').outerHeight();

  $(windown).scroll(function() {
    var scroll = $(document).scrollTop();

    if (scrolled > navHeight) {
      $('.header').addClass('fixed-header');
    }
    else {
      $('.header').removeClass('fixed-header');
    }

    if (scrolled > scroll) {
      $('.header').removeClass('sticky');
    } else {
      $('.header').addClass('sticky');
    }
    scroll = $(document).scrollTop;
  });
});