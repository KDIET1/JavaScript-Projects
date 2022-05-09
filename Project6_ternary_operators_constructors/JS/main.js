function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough.";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle (Make, Model, Year, Color) { //Keywords and Constructors
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a"+Erik.Vehicle_Color+"-colored"+Erik.Vehicle_Model+
    "manufactured in"+Erik.Vehicle_Year;
}
function Horse (Color, Breed) { //New and This exercise
    this.Horse_Color=Color;
    this.Horse_Breed=Breed;
}
var Ned=new Horse("Grey","Percheron Cross");
var Otter=new Horse("Brown","Thoroughbred");
var Cellie=new Horse("Grey","Irish Sport Horse");
function horseFunction() {
    document.getElementById("New_and_This").innerHTML="Ned is a"+Ned.Horse_Breed+"horse who is"
    +Ned.Horse_Color+"-colored";
}
function count_Function() { //Nested Function
    document.getElementById("Counting").innerHTML=Count();
    function Count() {
        var Starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}