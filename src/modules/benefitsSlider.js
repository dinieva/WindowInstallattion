const benefitsSlider = () => {
    const sliderBlock = document.querySelector('.benefits-wrap'); //контейнер, для отображения 
    const slides = document.querySelectorAll('.benefits__item');
    const buttonsBlock = document.querySelector('.benefits-arrows');
    const windowOuterWidth = window.outerWidth;  //размере внешнего окна 
    let slidetoShow;// видимое количество изображений
    let slidesToScroll; // сколько слайдев прибавлять
    let itemWidth;
    let movePosition;
    let setPosition;
    let position = 0; // положение ленты прокрутки

    sliderBlock.length = '';
    const track = document.createElement('div'); //блок, который будет перемещаться.
    track.style.display = 'flex';
    sliderBlock.append(track);

    sliderBlock.style.overflow = 'hidden';

    slides.forEach(slide => {
        track.append(slide);
    })

    const slider = () => {
        itemWidth = sliderBlock.clientWidth / slidetoShow;// ширина картинки  itemWidth
        movePosition = slidesToScroll * itemWidth;
        slides.forEach(slide => {
            slide.style.minWidth = `${itemWidth}px`;
        })
        setPosition = () => {
            track.style.transform = `translateX(${position}px)`
        }
    };

    if (windowOuterWidth > 576) {
        slidetoShow = 3;
        slidesToScroll = 3;
        slider();

        buttonsBlock.addEventListener('click', function (e) {
            if (e.target.closest('.benefits__arrow--right')) {
                if (position >= 0) {
                    const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;
                    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
                    setPosition();
                } else {
                    const itemsLeft = Math.abs(position) / itemWidth;
                    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
                    setPosition();
                }
            }

            if (e.target.closest('.benefits__arrow--left')) {
                if (position < 0) {
                    const itemsLeft = Math.abs(position) / itemWidth;
                    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
                    setPosition();

                } else {
                    const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;
                    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
                    setPosition();
                }
            }
        })


    } else if (windowOuterWidth < 576) {
        slidetoShow = 1;
        slidesToScroll = 1;
        slider();

        buttonsBlock.addEventListener('click', function (e) {
            if (e.target.closest('.benefits__arrow--right')) {
                const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;
                position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
                setPosition();
            }

            if (e.target.closest('.benefits__arrow--left')) {
                const itemsLeft = Math.abs(position) / itemWidth;
                position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
                setPosition();
            }
        })
    }
}

export default benefitsSlider