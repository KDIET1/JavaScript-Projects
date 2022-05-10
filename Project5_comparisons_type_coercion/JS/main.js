document.write(typeof "Word"); //String
document.write(typeof 3); //number
document.write("10"+5); //coercion

function nan_Function() {
    document.getElementById("Test").innerHTML=isNaN('808'); //NaN function
}
document.write(2E310); //Infinity
document.write(-3E310); //negative Infinity
document.write(8 > 3); //Boolean True
document.write(8 < 3); //Boolean False
console.log(2+2); //Console log
document.write(12 == 12); //double equal sign true
document.write(12 == 11); //double equal sign false

X = 45; //triple equal sign false
Y = "FOX";
document.write(X === Y);
A = 85;
B = 85;
document.write(A === B); //triple equal sign true

document.write(7 > 3 && 9 > 5); //AND operator true
document.write(7 > 3 && 5 > 9); //AND operator false

document.write(10 > 8 || 7 > 4); //OR operator true
document.write(10 < 8 || 7 < 4); //OR operator false

function not_Function() { //NOT function false
    document.getElementById("Not").innerHTML = !(18 > 14);
}
function not_Function2() { //NOT function true
    document.getElementById("Not2").innerHTML = !(20 < 13);
}