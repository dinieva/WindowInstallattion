const yourOwnPrice = () => {

    const btn = document.querySelector('.btn-lg')

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);
        const id = btn.getAttribute('href');
        document.querySelector(id + '_1').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

export default yourOwnPrice