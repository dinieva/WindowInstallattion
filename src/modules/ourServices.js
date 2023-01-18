const ourServices = () => {
    const sliderContainer = document.querySelector('.row');
    const slides = document.querySelectorAll('.col-md-12.col-lg-6');
    const buttonsBlock = document.querySelector('.services-arrows');
    const windowOuterWidth = window.outerWidth;
    let showSlideAmount; //количество слайдов в зависимости от размера экрана
    console.log(sliderContainer.lastChild);
    const showSlides = () => {
        slides.forEach((slide, index) => {
            // slide.style.transition = '2s';
            if (index >= showSlideAmount) {
                slide.style.display = "none"
            } else {
                slide.style.display = "block"
                slide.id = 'activeSlide'
            }
        })
    }

    const changeSlides = () => {
        slides.forEach((slide) => {
            if (slide.style.display == 'block') {
                slide.style.display = 'none'
                slide.removeAttribute('id')
            } else if (slide.style.display == 'none') {
                slide.style.display = 'block'
                slide.id = 'activeSlide'
            }
        });
    }

    if (windowOuterWidth > 576) {
        showSlideAmount = 2;
        showSlides();
        buttonsBlock.addEventListener('click', (e) => {
            if (e.target.closest('.services__arrow--right')) {
                changeSlides();
            }

            if (e.target.closest('.services__arrow--left')) {
                changeSlides();
            }
        });
    } else if (windowOuterWidth < 576) {
        showSlideAmount = 1
        showSlides()

        buttonsBlock.addEventListener('click', (e) => {
            let activeSlide = document.getElementById('activeSlide');
            if (e.target.closest('.services__arrow--right')) {
                slides.forEach((slide) => {
                    if (slide.style.display == 'block') {
                        slide.style.display = "none"
                        activeSlide.removeAttribute('id')
                    }
                });
                let nextSlide = activeSlide.nextElementSibling;


                if (nextSlide.closest('.col-md-12.col-lg-6')) {
                    nextSlide.style.display = "block"
                    nextSlide.id = 'activeSlide'
                }

            };

            if (e.target.closest('.services__arrow--left')) {
                slides.forEach((slide) => {
                    if (slide.style.display == 'block') {
                        slide.style.display = 'none'
                        activeSlide.removeAttribute('id')
                    }
                });
                let prevSlide = activeSlide.previousElementSibling;
                prevSlide.style.display = "block"
                prevSlide.id = 'activeSlide'

                /* if (prevSlide == sliderContainer.firstChild) {
                    console.log(sliderContainer.firstChild);
                } */
            }
        })
    }
}


export default ourServices 