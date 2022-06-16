$(document).ready(function() {
    $(".slider").slick({
        arrows: true,
        // dots: true,
        speed: 800,
        infinite: false,
    });

    $(".burger").click(function(){
        $(".burger").toggleClass ("active");
    });

});
