const ourServices = () => {
    const sliderContainer = document.querySelector('.row');
    const slides = document.querySelectorAll('.col-md-12.col-lg-6');
    const buttonsBlock = document.querySelector('.services-arrows');


    let showSlideAmount = 2;

    slides.forEach((slide, index) => {
        if (index >= showSlideAmount) {
            slide.style.display = "none";
        } else {
            slide.style.display = "block";
        }
    })

    const showSlides = () => {
        slides.forEach((slide, index) => {
            if (slide.style.display == 'block') {
                slide.style.display = 'none';
            } else if (slide.style.display == 'none') {
                slide.style.display = 'block';
            }
        });
    }

    buttonsBlock.addEventListener('click', (e) => {
        if (e.target.closest('.services__arrow--right')) {
            showSlides();
        }

        if (e.target.closest('.services__arrow--left')) {
            showSlides();
        }
    });



}

export default ourServices 