import { animate } from './helpers'

const requireMaster = () => {
    const btns = document.querySelectorAll('.service-button')
    const modal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const closeBtn = modal.querySelector('.services-modal__close ')

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setTimeout(() => {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return 1 - Math.sin(Math.acos(timeFraction));
                    },

                    draw(progress) {
                        overlay.style.display = 'block'
                        modal.style.display = 'block';
                    }
                });
            }, 300);
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
                }
            });
        }, 500);
    })
}

export default requireMaster