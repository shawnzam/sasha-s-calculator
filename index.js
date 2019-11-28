let parking_spot_number;
let parking_spot_operator;

const clear = function (all) {
    document.getElementById('calcinput').value = ''
    if(all == true){
        parking_spot_number = ''
        parking_spot_operator = ''
    }
}

const plus = function () {
    parking_spot_number = document.getElementById('calcinput').value
    parking_spot_operator = '+'
    clear(false)
}

const minus = function () {
    parking_spot_number = document.getElementById('calcinput').value
    parking_spot_operator = '-'
    clear(false)
}

const multiply = function () {
    parking_spot_number = document.getElementById('calcinput').value
    parking_spot_operator = '*'
    clear(false)
}

const divide = function () {
    parking_spot_number = document.getElementById('calcinput').value
    parking_spot_operator = '÷'
    clear(false)
}

const eq = function (currentValue){
    if (parking_spot_operator == '+'){
        const newValue = Number(currentValue) + Number(parking_spot_number);
        document.getElementById('calcinput').value = newValue;
    }
    else if(parking_spot_operator == '*') {
        const newValue = Number(currentValue) * Number(parking_spot_number);
        document.getElementById('calcinput').value = newValue;
    }
    else if(parking_spot_operator == '-') {
        const newValue = Number(parking_spot_number) - Number(currentValue);
        document.getElementById('calcinput').value = newValue;
    }
    else if (parking_spot_operator == '÷') {
        let newValue = Number(parking_spot_number) / Number(currentValue);
        if(Number.isFinite(newValue)) {
            document.getElementById('calcinput').value = newValue;
        } else {
            newValue = 'Can not divide by zero'
            document.getElementById('calcinput').value = newValue;
        }

    }
}


const setButtons = function(){
    const buttons = document.getElementsByClassName('numberBox');
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('click', (e) => {
            console.log(e.target.innerHTML)
            console.log(`parking_spot_number: ${parking_spot_number} parking_spot_operator ${parking_spot_operator}`)
            const elementValue = e.target.innerHTML
            const currentValue = document.getElementById('calcinput').value
            if (e.target.className == 'numberBox') { 
                document.getElementById('calcinput').value = currentValue + elementValue
            }
            else if(elementValue == 'AC'){
                clear(true)
            }
            else if (elementValue == '+'){
                plus()
            }
            else if (elementValue == '-'){
                minus()
            }
            else if (elementValue == '÷'){
                divide()
            }
            else if (elementValue == '*'){
                multiply()
            }
            else if (elementValue == '='){
                eq(currentValue)
            }
        })
    }
}



document.addEventListener("DOMContentLoaded", function () {
    setButtons()

});