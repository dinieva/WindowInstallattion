import { animateCalc } from './helpers'

const calc = (price = 100) => {
    const calcBlock = document.getElementById('calc')
    const calcType = document.getElementById('calc-type')  //*обязательные поля
    const calcTypeMaterial = document.getElementById('calc-type-material')
    const calcSquare = document.getElementById('calc-input') //*обязательные поля, вводить только цифры
    const total = document.getElementById('calc-total')

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        let calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
        const calcSquareValue = +calcSquare.value
        let totalValue = 0

        if (!calcTypeMaterialValue) {
            calcTypeMaterialValue = 1
        }
        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcTypeMaterialValue;
        } else {
            totalValue = 0
        }

        // total.value = totalValue
        animateCalc(value => {
            total.value = Math.floor(value);
        }, 0, totalValue, 800);

    }

    calcBlock.addEventListener('change', (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcTypeMaterial) {
            countCalc();
        }
    })
}

export default calc