$(window).on('load', function () {
    $wrapper = $('.wrapper');
    $wrapper.fadeOut();
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $(".loader").fadeOut();
    $(".loaderArea").delay(300).fadeOut('slow');
    $(".wrapper").fadeIn();
    document.getElementById("map-1").innerHTML = "<iframe src=\"https://yandex.ru/map-widget/v1/-/CBuauTECWD\" width=\"420\" height=\"280\" frameborder=\"0\"\n" +
        "                            allowfullscreen=\"true\" class=\"map-load\" id=\"map\"></iframe>";
    document.getElementById("map-2").innerHTML = "<iframe src=\"https://yandex.ru/map-widget/v1/-/CBuay4HP9D\" width=\"420\" height=\"280\" frameborder=\"0\"\n" +
        "                            allowfullscreen=\"true\" id=\"map\"></iframe>";
});


$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 800);
        return false;
    });
});