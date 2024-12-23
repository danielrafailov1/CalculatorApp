const display = document.getElementById("display");

function addToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let newval = "";
        for (let i = 0; i < display.value.length; i++) {
            if (display.value[i] === 'x') {
                newval += '*';
            } else {
                newval += display.value[i];
            }
        }
        display.value = eval(newval);
    }
    catch(error){
        display.value = "Error";
    }
}
