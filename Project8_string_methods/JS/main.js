function slice_Method() { //Slice function
    var Sentence = "whats popular is not always right and whats right is not always popular.";
    var Section = Sentence.slice(6,13);
    document.getElementById("Slice").innerHTML=Section;
}

function string_Method() { //Number method
    var X=8;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

function precision_Method() {
    var X=12938.3012987376112;
    document.getElementById("Precision").innerHTML=X.toPrecision(10);
}