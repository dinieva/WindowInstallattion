import { animate } from './helpers'

const requireMaster = () => {
    const body = document.body;
    //const btns = document.querySelectorAll('.service-button')
    const modal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const closeBtn = modal.querySelector('.services-modal__close ')
    const serviceBlock = document.querySelectorAll('.service-block')
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    /* btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setTimeout(() => {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return 1 - Math.sin(Math.acos(timeFraction));
                    },

                    draw(progress) {
                        console.log(e.target);
                        overlay.style.display = 'block'
                        modal.style.display = 'block'
                        body.style.overflowY = 'hidden';
                        body.style.height = '100vh';
                    }
                });
            }, 300);
        })
    })*/

    console.log(serviceBlock);
    serviceBlock.forEach(block => {
        block.addEventListener('click', (e) => {
            if (e.target.matches('.btn')) {
                e.preventDefault();
                setTimeout(() => {
                    animate({
                        duration: 1000,
                        timing(timeFraction) {
                            return 1 - Math.sin(Math.acos(timeFraction));
                        },

                        draw(progress) {
                            overlay.style.display = 'block'
                            modal.style.display = 'block'
                            body.style.overflowY = 'hidden';
                            body.style.height = '100vh';
                        }
                    });
                }, 300);
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        setTimeout(() => {
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    overlay.style.display = 'none'
                    modal.style.display = 'none'
                    body.style.overflowY = 'visible';
                    body.style.height = '100vh';
                }
            });
        }, 500);
    })
}

export default requireMaster