$(document).ready(function () {
    var numberOfBlocks = $(".main_new").children().length; // Получаем количество блоков внутри "main_new"
    if (numberOfBlocks > 1) {
        $(".navigation").show(); // Если блоков больше одного, показываем блок навигации
    } else {
        $(".navigation").hide(); // Если блоков только один или меньше, скрываем блок навигации
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