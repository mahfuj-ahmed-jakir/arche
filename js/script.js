$(function () {
  "use strict";


  // banner slider js
  $('.big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.ban_small_slider',
  });

  $('.ban_small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.big_slider',
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true
  });


  // Counter js start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // Service slider js start
  $('.service_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  })













});