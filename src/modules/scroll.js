const scroll = () => {
    const arrowToUp = document.querySelector('.smooth-scroll ')
    const firstSection = document.getElementById('offer')
    const header = document.getElementById('header')
    let sectionHight = firstSection.clientHeight

    arrowToUp.style.display = 'none'

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= sectionHight) {
            arrowToUp.style.display = 'block'
        }
    })


    arrowToUp.addEventListener('click', () => {
        header.scrollIntoView(true)
        arrowToUp.style.display = 'none'
    })
}

export default scroll