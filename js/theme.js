;
(function($) {
    "use strict";

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.main_header_area').length) {
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            });

            //* nav_searchFrom
            $('.nav_searchFrom').on('click', function() {
                $('.searchForm').toggleClass('show');
                return false
            });
            $('.form_hide').on('click', function() {
                $('.searchForm').removeClass('show')
            });

            // toggle_menu
            $(".grid_btn").on('click', function() {
                $(".toggle_menu").toggleClass("active");
            });
            $("section, .close").on('click', function() {
                $(".toggle_menu").removeClass("active");
            });
        };
    };

    //* Round Circle js
    $(".schools_slavery, .causes_area, .fundraising, .pc_8, .donated_pie").each(function() {
        $(this).waypoint(function() {
            $('.pie_chart').pieChart({
                barColor: '#b7caff',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_2').pieChart({
                barColor: '#9dfbd0',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_3').pieChart({
                barColor: '#fb7198',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_9').pieChart({
                barColor: '#e7c9ff',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_10').pieChart({
                barColor: '#c2fdb7',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_11').pieChart({
                barColor: '#e7c9ff',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_4').pieChart({
                barColor: '#fdaa6c',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_5').pieChart({
                barColor: '#adc8fc',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_6').pieChart({
                barColor: '#85edfa',
                trackColor: '#eaeaea',
                lineCap: 'butt',
                size: 96,
                lineWidth: 15,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_7').pieChart({
                barColor: '#81abfd',
                trackColor: '#faa260',
                lineCap: 'butt',
                size: 100,
                lineWidth: 50,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_8').pieChart({
                barColor: '#81abfd',
                trackColor: '#fbb987',
                lineCap: 'butt',
                size: 130,
                lineWidth: 65,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
            $('.pc_12').pieChart({
                barColor: '#fd7611',
                trackColor: '#dadada',
                lineCap: 'butt',
                size: 71,
                lineWidth: 8,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                },
                animate: {
                    duration: 1500,
                    enabled: true
                },
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    //* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube').length) {
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
        };
    };

    //* Counter Js 
    function counterUp() {
        if ($('.countarup_area').length) {
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };

    //* Client Logo Js 
    function owl_Carousel() {
        if ($('.feedback_slide').length) {
            $('.feedback_slide').owlCarousel({
                loop: true,
                margin: 110,
                autoplay: true,
                nav: false,
                dots: true,
                items: 2,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    991: {
                        items: 2,
                        dots: true
                    },
                }
            });
        };
    };









    //* Isotope js
    function protfolioIsotope() {
        if ($('.protfolio_area').length) {
            // Activate isotope in container
            $(".protfoli_inner").imagesLoaded(function() {
                $(".protfoli_inner").isotope({
                    layoutMode: 'masonry',
                });
            });

            // Add isotope click function 
            $(".protfoli_filter li").on('click', function() {
                $(".protfoli_filter li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $(".protfoli_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        };
    };

    // CountDown Js 
    function countDown() {
        if ($('.countdown').length) {
            $('.countdown').dsCountDown({
                endDate: new Date("November 01, 2019 20 23:59:00"),
            });
        }
    }

    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.scroll-top').on('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }

    // Preloader JS
    function preloader() {
        if ($('.preloader').length) {
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');
            })
        }
    }

    // simpleLightbox JS
    function lightbox() {
        if ($('.about_img_area').length) {
            $('.about_img_area .about_img').simpleLightbox()
        }
    }

    //* Parallaxmouse js
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };

    /*Function Calls*/
    new WOW().init();
    navbarFixed();
    scrollToTop();
    magnificPopup();
    counterUp();
    owl_Carousel();
    protfolioIsotope();
    countDown();
    lightbox();
    parallaxMouse();
    preloader();

})(jQuery);





$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        margin: 10,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});