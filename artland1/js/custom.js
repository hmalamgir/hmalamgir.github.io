$(document).ready(function () {
    "use strict";


    /*==================================
        * Author        : H.M. Alamgir
        * Template Name : 
        * Version       : 
    ==================================== */

    /*=========== TABLE OF CONTENTS ===========

     01. Slider
     
    ======================================*/


    /*--------------------------------
       01. Slider
    ----------------------------------*/
    $('.slider-area').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });

    // homepage slider animation support
    $(".slider-area").on("translate.owl.carousel", function () {
        $(".slider-content h4,.slider-content h2").removeClass("animated fadeInLeft").css({
            'opacity': '0'
        });
        $(".slider-content button").removeClass("animated fadeInDown").css({
            'opacity': '0'
        });
    });

    $(".slider-area").on("translated.owl.carousel", function () {
        $(".slider-content h4,.slider-content h2").addClass("animated fadeInLeft").css({
            'opacity': '0'
        });
        $(".slider-content button").addClass("animated fadeInDown").css({
            'opacity': '0'
        });

    });


    $(".slider-area").on("translate.owl.carousel", function () {
        $(".slider-content-two h4,.slider-content-two h2").removeClass("animated fadeInUp").css({
            'opacity': '0'
        });
        $(".slider-content-two button").removeClass("animated fadeInLeft").css({
            'opacity': '0'
        });
    });

    $(".slider-area").on("translated.owl.carousel", function () {
        $(".slider-content-two h4,.slider-content-two h2").addClass("animated fadeInUp").css({
            'opacity': '0'
        });
        $(".slider-content-two button").addClass("animated fadeInLeft").css({
            'opacity': '0'
        });

    });



    /*--------------------------------
       02. owl carousal
    ----------------------------------*/

    $('.testimonial-content').owlCarousel({
        loop: true,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        mouseDrag: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*--------------------------------
           03. video play
        ----------------------------------*/

    $('#video').magnificPopup({
        type: 'iframe',
        iframe: {
            
            patterns: {
                youtube: {
                    index: 'youtube.com/', 

                    id: 'v=', 

                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                },
                

            },

            srcAction: 'iframe_src', 
        }
    });



    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
          $(".navbar.bootsnav").css("background" , "");
        }
  
        else{
            $(".navbar.bootsnav").css("background" , "");  	
        }
    })




    // =====Smooth Scroll=====

    $('a.data-scroll').on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1200);
    });


});
