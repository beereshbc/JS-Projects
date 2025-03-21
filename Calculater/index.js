
const display = document.getElementById('display');

const apendToDisplay = (input) => {
display.value += input;
console.log(input);

}

const calculate = () => {
try {
    display.value = eval(display.value)
} catch (error) {
    display.value = "Enri Media"
}
}

const cleareAll = () => {
    display.value = ""
}


const eventHandler = (event) => {

    try {
         let key = event.key;
    if (key>='0'&& key <='9' || ['+', '-', '*', '/', '.'].includes(key)) {
        apendToDisplay(key);
    } else if(key === 'Escape'){
        cleareAll();
    } else if (key === 'Enter' || key === "="){
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0,  -1)
    }
    } catch (error) {
        display.value = "Ta Ta Bye Bye"
    }

   
}

document.addEventListener('keydown', eventHandler)

const btn = document.getElementById("id");

const btnClick = () => {
    btn.addEventListener('click', () => {
        btn.innerHTML = new Date(new Date().getTime() + 1000 *60*60)
    } )
}
