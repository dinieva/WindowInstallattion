const scroll = () => {
    const arrowToUp = document.querySelector('.smooth-scroll ')
    const firstSection = document.getElementById('offer')
    let sectionHight = firstSection.clientHeight
    let scrolled
    let timer

    arrowToUp.style.display = 'none'

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= sectionHight) {
            arrowToUp.style.display = 'block'
        }
    })

    const scrollToTop = () => {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled)
            scrolled = scrolled - 200 //  скорость прокрутки
            timer = setTimeout(scrollToTop, 100)
            arrowToUp.style.display = 'none'
        }
        else {
            clearTimeout(timer)
            window.scrollTo(0, 0)
        }
    }

    arrowToUp.addEventListener('click', () => {
        scrolled = window.pageYOffset
        //window.scrollTo(0, 0); //резкая прокрутка
        scrollToTop()
    })
}

export default scroll