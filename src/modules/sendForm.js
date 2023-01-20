const sendForm = () => {
    const forms = document.querySelectorAll('.order-form.rf');
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';
    let userName;
    let userPhone;

    forms.forEach(form => {
        form.addEventListener('click', (e) => {
            if (e.target.name === 'fio') {
                e.target.addEventListener('change', () => {
                    const reg = /^[а-яА-ЯёЁa-zA-Z]+$/g;
                    if (reg.test(e.target.value) && e.target.value !== '') {
                        e.target.classList.add('success')
                        userName = e.target.value
                    } else {
                        e.target.classList.remove('success')
                    }
                })
            }

            if (e.target.name === 'phone') {
                e.target.addEventListener('change', () => {
                    const reg = /\+?[\s]*\d{3}[\s]*\d{3}([\s*-]*\d{2}){2}/g;
                    if (e.target.value != '' && reg.test(e.target.value)) {
                        e.target.classList.add('success')
                        userPhone = e.target.value
                    } else {
                        e.target.classList.remove('success')
                    }
                })
            }
        })
    })

    const validate = (list) => {
        let success;

        list.forEach(input => {
            if (input.type == 'text') {
                if (!input.classList.contains('success')) {
                    success = false
                } else {
                    success = true
                }
            }
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const formElements = form.querySelectorAll('input');

            const user = {
                login: userName,
                phone: userPhone
            }

            statusBlock.textContent = loadText
            form.append(statusBlock)

            if (validate(formElements)) {
                sendData(user)
                    .then(data => {
                        statusBlock.textContent = successText

                        formElements.forEach(input => {
                            input.value = ''
                        })
                    })
                    .catch(error => {
                        statusBlock.textContent = errorText
                        console.log(error);
                    })
            } else {
                alert('Данные не валидны!!!')
                statusBlock.textContent = errorText
            }
        })
    })
}

export default sendForm