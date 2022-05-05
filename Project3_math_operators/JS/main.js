function addition_Function() { //This is an addition function
    var addition = 4+4;
    document.getElementById("Math").innerHTML = "4+4="+addition;
}
function subtraction_Function() { //This is a subtraction function
    var Subtraction = 5-2;
    document.getElementById("Math").innerHTML = "5-2="+Subtraction;
}
function multiplication () { //This is a multiplication function
    var simple_Math = 6*8;
    document.getElementById("Math").innerHTML="6x8="+simple_Math;
}
function division () { //This is a division function
    var simple_Math=48/6;
    document.getElementById("Math").innerHTML="48/6="+simple_Math;
}
function more_Math () { //Ths is an example of multiple operations
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals"+simple_Math;
}
function modulus_Operator () { //This is an example of a Modulus Operator
    var simple_Math=25 % 6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of: "+simple_Math;
}
function negation_Operator () { //This is an example of a Unary Operator
    var x=10;
    document.getElementById("Math").innerHTML = -x;
}
var X = 5; //This is an Increment Operator
X++;
document.write(X);
var X = 5.25; //This is a Decrement Operator
X--;
document.write(X);
window.alert(Math.random()); //This is a random
window.alert(Math.random()*100) //This is a more specific random