$(document).ready(function(){
    $(".main__slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick__dots',
      });

      $(".works__elements").slick({
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick__dots_works',
        slidesPerRow: 2,
        variableWidth: true,
        slidesToScroll: 1,
      });

})
