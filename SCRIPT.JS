var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");


var operand1 = 0;
var operand2 = null;

var operator = null;


for(var i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click',function() {
        var value = this.getAttribute('data-value');

        // console.log(value);
        if(value == '+') {
            // display.innerHTML = null;
            operator = '+';
            operand1 = parseFloat(display.textContent);

            display.innerHTML = operator;
        } else if(value == '-') {
            // display.innerHTML = null;
            operator = '-';
            operand1 = parseFloat(display.textContent);

            display.innerHTML = operator;
        } else if(value == '*') {
            // display.innerHTML = null;
            operator = '*';
            operand1 = parseFloat(display.textContent);

            display.innerHTML = operator;
        } else if(value == '/') {
            // display.innerHTML = null;
            operator = '/';
            operand1 = parseFloat(display.textContent);

            display.innerHTML = operator;
        } else if(value == '%') {
            // display.innerHTML = null;
            
            operand1 = parseFloat(display.textContent);
            operand1 = eval(operand1+'/'+'100');

            display.innerHTML = operand1;
        } else if(value == 'AC') {
            // display.innerHTML = null;
            operand1 = 0;
            operand2 = null;
            operator = null;

            display.innerHTML = null;
        } else if(value == '+/-') {
            // display.innerHTML = null;
            operand1 = parseFloat(display.textContent);
            operand1 = eval(operand1+'*'+'-1');

            display.innerHTML = operand1;
        } else if(value == '=') {
            // display.innerHTML = null;
            
            operand2 = parseFloat(display.textContent);

            operand1 = eval(operand1+operator+operand2);

            display.innerHTML = operand1;

            
        } else {
            var temp = display.textContent;
            if((temp == '+') || (temp == '-') || (temp == '*') || (temp == '/')) {
                display.innerHTML = value;
            } else {
                display.innerHTML += value;
            }
        }
    });
}