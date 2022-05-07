document.write(typeof "Word"); //Typeof Operator string
document.write(typeof 3); //Typeof operator number
document.write(typeof "Word" 3) //Typeof operator word and string
document.write("10"+5); //Type coercion
function my_Function() {
    document.getElementById("Test").innerHTML=0/0; //NaN false
    document.getElementById("Test").innerHTML=isNaN('This is a string'); //NaN True
    document.getElementById("Test").innerHTML=isNaN('007'); //NaN false
}
document.write(2E310); //Infinity
document.write(-3E310); //negative Infinity
document.write(10>2); //Boolean true
document.write(10<2); //Boolean false
console.log(2+2); //Console Log
document.write(10==10); //number on left equals number on right
document.write(3==11); //number on left doesn't equal number on right
X=10;
Y=10;
document.write(X===Y); //both type and value are true
X=82;
Y="82";
document.write(X===Y); //value is true but type is false
document.write(5>2&&10>4); //Boolean logic operator AND
document.write(5>10&&10>4); //Boolean logic operator AND
document.write(5>10||10>4); //Boolean logic operator OR
function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10); //NOT operator true
}
function not_Function() {
    document.getElementById("Not").innerHTML=!(5>10); //NOT operator false
}