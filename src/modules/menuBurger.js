import { blockScroll } from './helpers'
import { unblockScroll } from './helpers'

const activeMenu = () => {
    const menuContainer = document.querySelector(".navbar")
    const menu = document.querySelector(".navbar-collapse.collapse")
    const burgerMenu = document.querySelectorAll(".icon-bar")
    const smoothLinks = menu.querySelectorAll('a[href^="#"]');

    burgerMenu.forEach((span) => {
        span.addEventListener('click', (e) => {
            if (e.target.closest('navbar-toggle')) {
                menu.style.setProperty("display", "block", "important");
            }
            menuContainer.style.display = "block";
            menu.style.setProperty("display", "block", "important");
            blockScroll()
            menuContainer.style.transform = `translateX(0)`
            menuContainer.style.width = '50vw';
            menuContainer.style.height = '100vh';
        })
    })
    smoothLinks.forEach(smoothLink => {
        smoothLink.addEventListener('click', function (e) {
            unblockScroll()
            e.preventDefault();
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            menuContainer.style.display = "none";
        })
    })
}

export default activeMenu