const scroll = () => {
    const arrowToUp = document.querySelector('.smooth-scroll ')
    const firstSection = document.getElementById('offer')
    let sectionHight = firstSection.clientHeight

    arrowToUp.style.display = 'none'

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= sectionHight) {
            arrowToUp.style.display = 'block'
        } else {
            arrowToUp.style.display = 'none'
        }
    })

    arrowToUp.addEventListener('click', () => {
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

export default scroll