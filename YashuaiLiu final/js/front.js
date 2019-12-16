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

    // $(document).ready(function(){
    //     $('.aurochs').mouseover(
    //         function(){
    //             $(this).css("opacity","0"); console.log(this);
    //             $('.aurochsbone').css("opacity","100")}
    //     )
    //     .mouseout(
    //         function(){
    //             $(this).css("opacity","100");
    //             $('.aurochsbone').css("opacity","0")}
    //     );
    // });

$(document).ready(function(){

    $('.aurochs').hover(function(){
        $(this).toggleClass('active');
        $('.aurochsbone').toggleClass("active");
    });

  });

$(document).ready(function(){

    $('.dodo').hover(function(){
        $(this).toggleClass('active');
        $('.dodobone').toggleClass("active");
    });
              
});

$(document).ready(function(){

    $('.auk').hover(function(){
        $(this).toggleClass('active');
        $('.aukbone').toggleClass("active");
    });
              
});

$(document).ready(function(){

    $('.pigeon').hover(function(){
        $(this).toggleClass('active');
        $('.pigeonbone').toggleClass("active");
    });
              
});


$(document).ready(function(){

    $('.quagga').hover(function(){
        $(this).toggleClass('active');
        $('.quaggabone').toggleClass("active");
    });
              
});


$(document).ready(function(){

    $('.thylacine').hover(function(){
        $(this).toggleClass('active');
        $('.thylacinebone').toggleClass("active");
    });
              
});