$(document).ready(function () {
    $("#owl-demo").each(function () {
        $(this).owlCarousel({
            items: 1,
            dots: true,
            nav: true,
            loop: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });
    });
    $("#owl-demo1").each(function () {
        $(this).owlCarousel({
            loop: false,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                492.8: {
                    loop: true,
                    items: 2,
                    nav: true,
                },
                991.8: {
                    items: 2.2,
                    nav: true,
                }
            }
        });
    });
    var btn = $('#top-btn');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    var link = $('.link-3');
    link.click(function () {
        $('.dropDownMenu').css("display", "flex");
    });
    var link = $('.goLink');
    link.click(function () {
        $('.contactFormBg').css("display", "flex");
    });
    var link = $('.closebutton');
    link.click(function () {
        $('.dropDownMenu').css("display", "none");

    });
    var link = $('.closebutton2');
    link.click(function () {
        $('.contactFormBg').css("display", "none");

    });
    var link = $('#bisu-nedir');
    link.click(function () {
        $('.dropDownMenu').css("display", "none");

    });
    var link = $('#markalar');
    link.click(function () {
        $('.dropDownMenu').css("display", "none");

    });
});