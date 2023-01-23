import Swiper, { Navigation, Autoplay } from 'swiper';

export const ourServicesFunc = () => {
    var swiper = new Swiper(".swiper-service", {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        /* autoplay: {
            delay: 2000,
        }, */
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            /* 768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            }, */
        },
    });
}

export const benefitsSliderFunc = () => {
    var swiper = new Swiper(".benefits-swiper", {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        },
    });
    //swiper.loopDestroy();
    //swiper.loopCreate();
}