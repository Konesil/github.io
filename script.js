$(document).ready(function () {
    var numberOfBlocks = $(".main_new").children().length;
    if (numberOfBlocks > 1) {
        $(".navigation").show();
    } else {
        $(".navigation").hide(); 
    }

    $(".main_new").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        appendDots: $("#dots"),
        prevArrow: $("#prev_arrow"),
        nextArrow: $("#next_arrow"),
        vertical: false
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
     
            document.getElementById('burger-checkbox').checked = false;
        });
    });
});
