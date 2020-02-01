



    // $(document).ready(function(){
    //     $('#menuIcon').click(function(){
    //         $('#mainMenu').css('left', '0px');
    //         function showMenu(){
    //             $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)');
    //             $('#menuIcon').animate({right: '-100'}, 300);
    //         }
    //         setTimeout(showMenu, 100);
    //     });

    //     $('#close').click(function(){
    //         $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)');
    //         function closeMenu(){
    //             $('#mainMenu').css('left', '-300px');
    //             $('#menuIcon').animate({right: '50'}, 300);
    //         }
    //         setTimeout(closeMenu, 100);

    //         function originalLayout(){
    //             $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)');
    //         }
    //         setTimeout(originalLayout, 600);
    //     });
    // });




$(document).ready(function () {
    $('#testimonials').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rewind: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i> Previous','Next <i class="fas fa-arrow-right"></i>'],
        autoplay: true,
        // autoplaySpeed: 100,
        autoPlay: 20000,
        center:true,
        responsive: {
            
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#new').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rewind: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        autoplay: true,
        // autoplaySpeed: 100,
        autoPlay: 20000,
        // center:true,
        responsive: {            
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    $('#work').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        rewind: true,
        dots: false,
        // navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        autoplay: true,
        // autoplaySpeed: 100,
        autoPlay: 20000,
        // center:true,
        responsive: {            
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
    
    $('#menuIcon').click(function(){
        $('#mainMenu').css('right', '0px');
        function showMenu(){
            // $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)');
            $('#menuIcon').animate({right: '-100'}, 1000);
        }
        setTimeout(showMenu, 100);
    });

    $('#close').click(function(){
        // $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)');
        function closeMenu(){
            $('#mainMenu').css('right', '-100vw');
            $('#menuIcon').animate({ right: '18px'}, 1000);
        }
        setTimeout(closeMenu, 100);

        // function originalLayout(){
        //     // $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)');
        // }
        // setTimeout(originalLayout, 600);
    });

    $('.close1').click(function () {
        function closeMenu() {
            $('#mainMenu').css('right', '-100vw');
            $('#menuIcon').animate({ right: '18px' }, 1000);
        }
        setTimeout(closeMenu, 100);
    });
   
    
});




//$(document).ready(function () {
//    $('.owl2').owlCarousel({
//        loop: true,
//        margin: 10,
//        nav: true,
//        rewind: true,
//        dots: true,
//        autoplay: true,
//        autoPlay: 20000,
//        animateOut: 'slideOutDown',
//        animateIn: 'slideOut',
//        responsiveClass:true,
//        responsive: {
//            0: {
//                items: 1
//            },
//            600: {
//                items: 2
//            },
//            1000: {
//                items: 3
//            }
//        }
//    })
//});




$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('blackto');
    } else {
        $('.navbar').removeClass('blackto');
    }
})
