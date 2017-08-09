// $(window).on('load', function() {
//   $("main").removeClass("preload");
// });

$(document).ready(function(){
    window_width = $(window).width();
    navCtrl();

});

var mobileMenuVisible = 0,
    navInitialized = false;


navCtrl = function(){
    if (!navInitialized){
        $navbar = $('nav').find('.navbar-collapse').first().clone(true);

        //navbar toggle
        $toggle = $('.navbar-toggle');

        // console.log($toggle);

        $toggle.click(function (){
            if(mobileMenuVisible== 1) {
                $('html').removeClass('nav-open');
                // $('.close-layer').remove();
                setTimeout(function(){
                    $toggle.removeClass('toggled');
                }, 400);
                mobileMenuVisible = 0;
            } else {
                setTimeout(function(){
                    $toggle.addClass('toggled');
                }, 430);

                $('html').addClass('nav-open');
                mobileMenuVisible = 1;
            }
        });

        navInitialized = true;

    }
};



/*******/



// $(window).on('load', function() {
//   $("main").removeClass("preload");
// });

// $(document).ready(function(){
//     window_width = $(window).width();
//     navCtrl();

// });

// var mobileMenuVisible = 0,
//     navInitialized = false;


// navCtrl = function(){
//     if (!navInitialized){
//         $navbar = $('nav').find('.navbar-collapse').first().clone(true);

//         // navContent = '';
//         // mobileNavContent = '';

//         // //add the content from the regular header to the mobile menu

//         // $navbar.children('ul').each(function(){
//         //         buff = $(this).html();
//         //         navContent = navContent + buff;
//         // });

//         // navContent = '<ul class="nav nav-mobile-menu">' + navContent + '</ul';
//         // $navbar.html(navContent);

//         // //append it to the body
//         //  $('body').append($navbar);

//         //navbar toggle
//         $toggle = $('.navbar-toggle');

//         // $navbar.find('a').removeClass('btn btn-round btn-default');
//         // $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
//         // $navbar.find('button').addClass('btn-simple btn-block');

//         // console.log($toggle);

//         $toggle.click(function (){
//             if(mobileMenuVisible== 1) {
//                 $('html').removeClass('nav-open');
//                 // $('.close-layer').remove();
//                 setTimeout(function(){
//                     $toggle.removeClass('toggled');
//                 }, 400);
//                 mobileMenuVisible = 0;
//             } else {
//                 setTimeout(function(){
//                     $toggle.addClass('toggled');
//                 }, 430);

//                 // $layer = $('<div class="close-layer"></div>');
//                 // $layer.appendTo(".wrapper-full-page");

//                 // setTimeout(function(){
//                 //     $layer.addClass('visible');
//                 // }, 100);


//                 // $layer.click(function() {
//                 //     $('html').removeClass('nav-open');
//                 //     mobileMenuVisible = 0;

//                 //     $layer.removeClass('visible');

//                 //      setTimeout(function(){
//                 //         $layer.remove();
//                 //         $toggle.removeClass('toggled');

//                 //      }, 400);
//                 // });
//                 $('html').addClass('nav-open');
//                 mobileMenuVisible = 1;
//             }
//         });

//         navInitialized = true;



//         // console.log("Hello World");
//          // console.log($navbar);
//          // console.log(navContent);

//     }
// };