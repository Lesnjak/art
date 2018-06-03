$('document').ready(function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    $('.big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        asNavFor: '.small',
        autoplay: true,
        autoplaySpeed: 4000,


        responsive: [
            {
                breakpoint: 1200,
                settings: {

                }
            },
            {
                breakpoint: 1062,
                settings: {


                }
            },
            {
                breakpoint: 768,
                settings: {

                }
            }

        ]
    });
    var slideToSow = 6;
if ($(document).height()< 860){
    slideToSow = 5;
}
if($(document).height()< 740){
    slideToSow = 4;
}
if($(document).height()< 640){
    slideToSow = 3;
}

    $('.small').slick({
        slidesToShow: slideToSow,
        slidesToScroll: true,
        asNavFor: '.big',
        dots: false,
        infinite: true,
        focusOnSelect: true,
        prevArrow:'<span class="next"></span>',
        nextArrow:'<span class="prev"></span>',
        arrows: true,
        vertical:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3
                }
            }


        ]
    });
    ////////////////////////////////////////


        var wrapperMenu = $('.wrapper-menu');

        wrapperMenu.click(function(){
            wrapperMenu.toggleClass('open');
            $('.menu-box').toggleClass('menu-box-open');
            $('header').toggleClass('header-after');

        })
        $('.menu-box ul li a ').click(function () {

            setTimeout(function () {
                wrapperMenu.toggleClass('open');
                $('.menu-box').toggleClass('menu-box-open');
                    $('header').toggleClass('header-after');
            },600)


        })


});
console.log();