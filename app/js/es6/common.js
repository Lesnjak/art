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
        pauseOnFocus:false,


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
if ($('header').height()< 860){
    slideToSow = 5;
}
if($('header').height()< 740){
    slideToSow = 4;
}
if($('header').height()< 640){
    slideToSow = 3;
}


    $('.small').slick({
        slidesToShow: slideToSow,
        slidesToScroll: true,
        asNavFor: '.big',
        dots: false,
        prevArrow:'<span class="next"></span>',
        nextArrow:'<span class="prev"></span>',
        arrows: true,
        vertical:true,
        focusOnSelect: true,
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