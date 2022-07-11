$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        // dots: true,
        speed: 800,
        infinite: false,
        responsive: [{
            breakpoint:768,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.burger').click(function(){
        $('.burger').toggleClass ('active');
        $('.header__nav').toggleClass('open-menu');
    });

    $('.header__link').click(function(){
        $('.burger').removeClass ('active');
        $('.header__nav').removeClass('open-menu');
    })
});
