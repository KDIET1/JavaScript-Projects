var x=10; //Global variable
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() { //Local variable
    var X=10;
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    console.log(X+100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() { //IF statements
    if (new Date().getHours()>1) {
        document.getElementById("Greeting").innerHTML="Get a watch.";
    }
}
if (40<50) { //IF statement that doesn't display because it isn't linked to the html file
    document.write ("The left number is smaller than the right number.")
}

function Dog_Function() { //IF ELSE statement
    Dog=document.getElementById("Dog").value;
    if (Dog>=1) {
        Owner="You are a dog owner!";
    }
    else {
        Owner="You do not have a dog.";
    }
    document.getElementById("How_many_dogs_do_you_have?").innerHTML=Owner;
}

function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if (Time>=12==Time<18) {
        Reply="It is afternoon.";
    }
    else {
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}