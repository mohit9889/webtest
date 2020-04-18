const calculate = (n1, operator, n2) => {
    console.log(n1, operator, n2);
    let result = ''
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);

    if (operator === 'add') {
        result = firstNum + secondNum;
    } else if (operator === 'subtract') {
        result = firstNum - secondNum;
    } else if (operator === 'multiply') {
        result = firstNum * secondNum;
    } else if (operator === 'divide') {
        result = firstNum / secondNum;
    }
    console.log(result);
    return result
}

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.calculator-display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        console.log(action);
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        //remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

        if (!action) {
            console.log("number key");
            if (displayedNum === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                //if calculator show 0 the replay 0 by number
                display.textContent = keyContent;
            } else {
                //either append the numbers
                display.textContent = displayedNum + keyContent;
            }

            //add custom attributes
            calculator.dataset.previousKeyType = 'number'
        }
        //operator
        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator  = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
            ) {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                //update calculator value as firstValue
                calculator.dataset.firstValue = calcValue;
            } else {
                //if there is no calculation, set displayedNum as firstValue
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');//applying css class style
            //add custom attribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = "0."
            }

            //add custom attributes
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'clear') {
            console.log("clear");
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.secondValue = '';
                calculator.dataset.previousKeyType = '';
            } else {
                key.textContent = 'AC';
            }

            display.textContent = 0;
            //add custom attributes
            calculator.dataset.previousKeyType = 'clear';
        }

        if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';
        }

        if (action === 'claculate') {
            console.log("equal key");
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            //if firstValue is available the do calculation
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }

                display.textContent = calculate(firstValue, operator, secondValue);
            }

            //set mod value attribute
            calculator.dataset.modValue = secondValue;
            //add custom attributes
            calculator.dataset.previousKeyType = 'calculate';
        }
    }
});