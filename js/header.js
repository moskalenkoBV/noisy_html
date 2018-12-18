// $(window).load(function() {
//   var $header = $('.main-header');
//   var $window = $(window);
//   var startOffset = $header.offset().top;

//   $window.on('scroll load', function() {
//     var scrollTop = $window.scrollTop();
//     if(startOffset - scrollTop <= 0) {
//       $header.addClass('fixed-header');
//     }
//     else {
//       $header.removeClass('fixed-header');
//     }
//   });
// });

// $('#haWidget').load( function() {
//   console.log($('#haWidget').contents());
// });

$(document).ready(function() {

$('#haWidget').parent().addClass('iframe-wrapper');

burger = $('#nav-icon3');
  var menu = $('.main-menu');
  var trigger = false;
  var window_width = $(window).width();
  if(window_width < 980) {
    trigger = true;
  }

  $(window).on('resize orientationchange', function() {
    window_width = $(window).width();
    if(window_width < 980) {
      trigger = true;
    }
    else {
      trigger = false;
      $('.sub-menu').removeClass('open');
      burger.removeClass('open');
      menu.removeClass('open');
    }
  });

  var lis = menu.find('.menu-item-has-children > span, .menu-item-has-children > a');

  burger.on('click', function() {
    $(this).toggleClass('open');
    $(menu).toggleClass('open');
    if(!$(this).hasClass('open')) {
      $('.sub-menu').removeClass('open');
    }
  });

  $(lis).on('click', function() {
    if(trigger == true) {
      var point = $(this).siblings('.sub-menu');
      if($(point).hasClass('open')) {
        $(point).removeClass('open');
      }
      else {
        $(point).addClass('open');
      }
    }
  });
});