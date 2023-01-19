const ourServices = () => {
    const slides = document.querySelectorAll('.col-md-12.col-lg-6');
    const buttonsBlock = document.querySelector('.services-arrows');
    const windowOuterWidth = window.outerWidth;
    let showSlideAmount; //количество слайдов в зависимости от размера экрана
    const timeInterval = 2000;
    let interval;

    const showSlides = () => {
        slides.forEach((slide, index) => {
            // slide.style.transition = '2s';
            if (index >= showSlideAmount) {
                slide.style.display = "none"
            } else {
                slide.style.display = "block"
            }
        })
    }

    const changeSlides = () => {
        slides.forEach((slide) => {
            if (slide.style.display == 'block') {
                slide.style.display = 'none'
            } else if (slide.style.display == 'none') {
                slide.style.display = 'block'
            }
        });
    }

    if (windowOuterWidth > 576) {
        showSlideAmount = 2;
        showSlides();

        const startSlide = (timer = 1500) => {
            interval = setInterval(changeSlides, timer)
        }

        const stoptSlide = () => {
            clearInterval(interval)
        }

        buttonsBlock.addEventListener('click', (e) => {
            if (e.target.closest('.services__arrow--right')) {
                changeSlides();
            }

            if (e.target.closest('.services__arrow--left')) {
                changeSlides();
            }
        });

        //останавливаем таймер при наведении курсора на стрелки
        buttonsBlock.addEventListener('mouseenter', (e) => {
            if (e.target.matches('.services__arrow ')) {
                stoptSlide()
            }
        }, true)

        //запускаем таймер при наведении курсора на стрелки
        buttonsBlock.addEventListener('mouseleave', (e) => {
            if (e.target.matches('.services__arrow ')) {
                startSlide(timeInterval)
            }
        }, true)

        startSlide(timeInterval) //запускаем таймер

    } else if (windowOuterWidth < 576) {
        showSlideAmount = 1
        showSlides()
        let currentSlide = 0;

        const prevSlide = (elems, index) => {
            elems[index].style.display = 'none'
        }

        const nextSlide = (elems, index) => {
            elems[index].style.display = 'block'
        }

        const autoSlide = () => {
            prevSlide(slides, currentSlide)
            currentSlide++

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }

            nextSlide(slides, currentSlide)
        }

        const startSlide = (timer = 1500) => {
            interval = setInterval(autoSlide, timer)
        }

        buttonsBlock.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide(slides, currentSlide)
            if (e.target.closest('.services__arrow--right')) {
                currentSlide++

            } else if (e.target.closest('.services__arrow--left')) {
                currentSlide--
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }

            if (currentSlide < 0) {
                currentSlide = slides.length - 1
            }

            nextSlide(slides, currentSlide)
        })

        startSlide(timeInterval)
    }
}


export default ourServices 