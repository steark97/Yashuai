$(function () {

    // Navbar//

    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // Scroll Spy//

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });  
});

    //history//

    //$(document).ready(function(){
       // $('.aurochs').hover(
        //    function(){$('.aurochsbone').fadeIn()}, 
        //    function(){$('.aurochsbone').fadeOut()}
       // );
   // });


    $(document).ready(function(){
        $(".aurochs").hover(function(){
          $(".aurochs").fadeOut();
          $(".aurochsbone").delay(350).fadeIn();
        });
      });
      