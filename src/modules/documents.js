const documents = () => {
    const sertificates = document.querySelectorAll('.sertificate-document')
    const overlays = document.querySelectorAll('.document-overlay')
    const overlayforModal = document.querySelector('.overlay')

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
        /*  overlayforModal.style.display = 'block' */
        let modal = document.querySelector('.modal');
        let modalImg = document.querySelector('.modal-content');
        modal.style.display = "block";
        modalImg.src = image.src;
        modalImg.style.height = 'auto';
        console.log(modalImg.style.height);

        let span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            e.preventDefault()
            e.target.style.opacity = '0';
            modalImage(e.target.parentElement.querySelector('img'))

        })
    })
}

export default documents