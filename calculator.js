document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.getElementsByClassName('button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', drawInScreen);
        buttons[i].addEventListener('mouseover', changeSize);
        buttons[i].addEventListener('mouseout', changeSize);
    }
});

let selectedOperator = '';
let currentNumber = '';

function changeSize(event) {
    switch (event.type) {
        case 'mouseover':
            this.style.transform = 'scale(1)';
            break;
        case 'mouseout':
            this.style.transform = 'scale(1)';
            break;
    }
}

function drawInScreen() {
    const firstNumbers = document.getElementById('firstNumbers');
    const secondNumbers = document.getElementById('secondNumbers');
    const operatorParag = document.getElementById('operators');
    const values = this.textContent;

    if (values >= 0 || values <= 9 || this.id === '.') {
        if (selectedOperator) {
            secondNumbers.innerHTML += values;
        } else {
            currentNumber += values;
            firstNumbers.innerHTML = currentNumber;
        }
    } else if (this.id === 'delete') {
        if (selectedOperator) {
            secondNumbers.innerHTML = secondNumbers.innerHTML.slice(0, -1);
        } else {
            currentNumber = currentNumber.slice(0, -1);
            firstNumbers.innerHTML = currentNumber;
        }
    } else if (this.id === 'deleteAll') {
        firstNumbers.innerHTML = '0';
        operatorParag.innerHTML = '';
        secondNumbers.innerHTML = '';
        selectedOperator = '';
        currentNumber = '';
    } else if (this.id !== 'equal' && this.id !== 'left' && this.id !== 'rigth') {
        selectedOperator = values;
        operatorParag.innerHTML = selectedOperator;
    }

    const drawResult = document.getElementById('equal');
    drawResult.addEventListener('click', () => {
        const first = document.getElementById('firstNumbers');
        const second = document.getElementById('secondNumbers');
        const operator = document.getElementById('operators');

        let secondValue = second.textContent;
        secondValue = (secondValue % 1 == 0) ? parseInt(secondValue) : parseFloat(secondValue);

        let firstValue = first.textContent;
        firstValue = (firstValue % 1 == 0) ? parseInt(firstValue) : parseFloat(firstValue);

        if (operator.textContent === '+') {
            let result = firstValue + secondValue;
            first.innerHTML = result;
            second.innerHTML = '';
            operator.textContent = '';
        }
        if (operator.textContent === '-') {
            let result = firstValue - secondValue;
            first.innerHTML = Math.fround(result);
            second.innerHTML = '';
            operator.textContent = '';
        }
        if (operator.textContent === '×') {
            let result = firstValue * secondValue;
            first.innerHTML = result;
            second.innerHTML = '';
            operator.textContent = '';
        }
        if (operator.textContent === '÷') {
            let result = firstValue / secondValue;
            first.innerHTML = Math.fround(result);
            second.innerHTML = '';
            operator.textContent = '';
        }
    });
}
