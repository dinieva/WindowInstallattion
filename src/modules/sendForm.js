const sendForm = () => {
    //const forms = document.querySelectorAll('.order-form.rf');
    const forms = document.querySelectorAll('form');
    const statusBlock = document.createElement('div');
    //калькулятор для обнуления полей после отправки
    const calcType = document.getElementById('calc-type')  //*обязательные поля
    const calcTypeMaterial = document.getElementById('calc-type-material')
    const calcSquare = document.getElementById('calc-input') //*обязательные поля, вводить только цифры
    const total = document.getElementById('calc-total');

    const loadText = 'Загрузка';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';
    let userName;
    let userPhone;
    let totalValue = 0

    if (total) {
        totalValue += +total.value
    }
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
        let success = true;

        list.forEach(input => {
            if (input.type == 'text') {
                if (!input.classList.contains('success')) {
                    success = false
                } /* else {
                    success = true
                } */
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

            if (total) {
                totalValue += +total.value
            }

            const user = {
                login: userName,
                phone: userPhone,
                totalValue: totalValue
            }

            statusBlock.textContent = loadText
            form.append(statusBlock)

            if (validate(formElements)) {
                sendData(user)
                    .then(data => {
                        statusBlock.textContent = successText

                        if (calcType && calcTypeMaterial && calcSquare && total) {
                            calcType.selectedIndex = 0
                            calcTypeMaterial.selectedIndex = 0
                            calcSquare.value = ''
                            total.value = ''
                        }

                        formElements.forEach(input => {
                            input.value = ''
                            totalValue = 0
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