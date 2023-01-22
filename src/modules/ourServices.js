import Swiper, { Navigation, Autoplay } from 'swiper';

export const ourServicesFunc = () => {
    var swiper = new Swiper(".swiper", {
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
        }
    });


}