$(document).ready(function() {
    $(".slider").slick({
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

    $(".burger").click(function(){
        $(".burger").toggleClass ("active");
    });

});
