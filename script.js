// Script for Calculator//

// basic arithmetic function//
add = (a,b) => a+b;
divide = (a,b) => a/b;
subtract = (a,b) => a-b;
multiply = (a,b) => a*b;

operate = (operator,a,b) => {
    console.log (c,a,b)
    if (operator == '+') {
        return number = (add(a,b));
    }
    else if (operator == '/') {
        return (divide(a,b));
    }
    else if (operator == '-') {
        return (subtract(a,b));
    }
    else {return (multiply(a,b))}
    
}

//declaring the two variables//

let a ="";// first number
let b ="";// second number
let c ="";// variable for the operation (+- etc) 

// function for rounding

function roundResult (number) {
    result = Math.round(number * 100000) /100000
}
function roundResulta (number) {
    a = Math.round(number * 100000) /100000}


//get all the button elements//
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divy = document.getElementById('divide');
const times = document.getElementById('multiply');
const clr = document.getElementById('clr');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const equals = document.getElementById('equals');
const point = document.getElementById('point');
//create constant for output//
let output = document.getElementById('output');


//add event listeners to the buttons constants with display added to output and variable created for computation//


plus.addEventListener ('click', () => { 
if (c != "") {a = parseInt(a); b = parseInt(b); a = operate(c,a,b); b=""; c='+';roundResulta(a);output.textContent = a; }
else {c='+'}output.textContent += "+"});

minus.addEventListener ('click', () => { if (c != "") {a = parseInt(a); b = parseInt(b); a = operate(c,a,b); b=""; c='-'; roundResulta(a); output.textContent = a}
else {c='-'}output.textContent += "-";});

divy.addEventListener ('click', () => {
if (c != "") {a = parseInt(a); b = parseInt(b); a = operate(c,a,b); b=""; c='/'; roundResulta(a); output.textContent = a;}
else {c='/'}output.textContent += "/";});

times.addEventListener ('click', () => { if (c != "") {a = parseInt(a); b = parseInt(b); a = operate(c,a,b); b=""; c='*'; roundResulta(a); output.textContent = a;}
else {c='*'}output.textContent += "*";});

clr.addEventListener ('click', () => { output.textContent = ""; a = ""; b = ""; c = ""});

one.addEventListener ('click', () => { output.textContent += "1";
if (c=="" && a=="") {a = "1" }
else if (c!=="" && b=="") { b ="1"}
else if (c=="" && a!=="") { a = a + "1"}
else {b = b + "1"}});

two.addEventListener ('click', () => { output.textContent += "2";
if (c=="" && a=="") {a = "2" }
else if (c!=="" && b=="") { b ="2"}
else if (c=="" && a!=="") { a = a + "2"}
else {b = b + "2"}});

three.addEventListener ('click', () => { output.textContent += "3";
if (c=="" && a=="") {a = "3" }
else if (c!=="" && b=="") { b ="3"}
else if (c=="" && a!=="") { a = a + "3"}
else {b = b + "3"}});

four.addEventListener ('click', () => { output.textContent += "4";
if (c=="" && a=="") {a = "4" }
else if (c!=="" && b=="") { b ="4"}
else if (c=="" && a!=="") { a = a + "4"}
else {b = b + "4"}});

five.addEventListener ('click', () => { output.textContent += "5";
if (c=="" && a=="") {a = "5" }
else if (c!=="" && b=="") { b ="5"}
else if (c=="" && a!=="") { a = a + "5"}
else {b = b + "5"}});

six.addEventListener ('click', () => { output.textContent += "6";
if (c=="" && a=="") {a = "6" }
else if (c!=="" && b=="") { b ="6"}
else if (c=="" && a!=="") { a = a + "6"}
else {b = b + "6"}});

seven.addEventListener ('click', () => { output.textContent += "7";
if (c=="" && a=="") {a = "7" }
else if (c!=="" && b=="") { b ="7"}
else if (c=="" && a!=="") { a = a + "7"}
else {b = b + "7"}});

eight.addEventListener ('click', () => { output.textContent += "8";
if (c=="" && a=="") {a = "8" }
else if (c!=="" && b=="") { b ="8"}
else if (c=="" && a!=="") { a = a + "8"}
else {b = b + "8"}});

nine.addEventListener ('click', () => { output.textContent += "9";
if (c=="" && a=="") {a = "9" }
else if (c!=="" && b=="") { b ="9"}
else if (c=="" && a!=="") { a = a + "9"}
else {b = b + "9"}});

zero.addEventListener ('click', () => { output.textContent += "0";
if (c=="" && a=="") {a = "0" }
else if (c!=="" && b=="") { b ="0"}
else if (c=="" && a!=="") { a = a + "0"}
else {b = b + "0"}});

equals.addEventListener ('click', () => {  a = parseInt(a); b = parseInt(b); result = operate(c,a,b);   roundResult(result)
    output.textContent = result;
});



