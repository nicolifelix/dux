/*
 * Projeto: DUX LP
 * Desenvolvimento: LAB2B
 */

var Util = {

    corousel: function(){
        var swiper = new Swiper(".lpDuxSwiper",{ 
            slidesPerView: 'auto',
            loop: true,
            effect: 'fade',
            speed: 4000,
            slidesPerView: '1',
            autoplay: {
                enabled: true,
                delay: 1,
            },
        });
    },

    aosEfect: function(){

        AOS.init();
    },


}

jQuery('.testimonial-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    });
