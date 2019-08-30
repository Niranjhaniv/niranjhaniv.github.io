
$(window).load(function () {
		
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */


    function homepageResponsive() {


        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > windowsHeight) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }
	}
	
	$('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
		$('.home-page').hide();
    });

   /* var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
        }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });*/

        $('.close-btn').on('click', function () {
            $('.home-page').css({
                visibility: 'visible'
            });
            $('.introduction, .menu').animate({
                left: 0
            }, 1000, 'easeOutQuart');
            $('.profile-page, .resume-page, .portfolio-page, .contact-page').fadeOut(800);
            $('.home-page').fadeIn(1200);
        });
    

});