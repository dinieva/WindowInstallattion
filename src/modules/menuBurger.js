const activeMenu = () => {
    const menu = document.querySelector("#navbar-collapse-fixed")
    const burgerMenu = document.querySelectorAll(".icon-bar")


    burgerMenu.forEach((span) => {
        span.addEventListener('click', (e) => {
            if (e.target.closest('navbar-toggle')) {
                menu.style.display = 'block';
            }
            menu.style.display = 'block';
        })
    })

}

export default activeMenu