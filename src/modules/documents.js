import { blockScroll } from './helpers'
import { unblockScroll } from './helpers'

const documents = () => {
    const sertificates = document.querySelectorAll('.sertificate-document')
    const overlays = document.querySelectorAll('.document-overlay')

    sertificates.forEach(image => {
        image.addEventListener('mouseover', (e) => {
            e.preventDefault()
            e.target.style.opacity = '0.9';
        })
        image.addEventListener('mouseout', (e) => {
            e.preventDefault()
            e.target.style.opacity = '0';
        })
    })

    const modalImage = (image) => {
        let modal = document.querySelector('.modal');
        let modalImg = document.querySelector('.modal-content');
        modal.style.display = "block";
        modalImg.src = image.src;
        blockScroll()

        let span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
            unblockScroll()
        }
    }
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            e.preventDefault()
            e.target.style.opacity = '0';
            modalImage(e.target.parentElement.querySelector('img'))

        })
    })

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
}

export default documents