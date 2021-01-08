// -----------------slick----------
jQuery(document).ready(function () {

    jQuery('.world__item').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '60px'
    });

    jQuery(".btn-prev").click(function (event) {
        event.preventDefault();
        jQuery(".slick-mobile").slick("slickPrev");
    })
    jQuery(".btn-next").click(function (event) {
        event.preventDefault();
        jQuery(".slick-mobile").slick("slickNext");
    })

});