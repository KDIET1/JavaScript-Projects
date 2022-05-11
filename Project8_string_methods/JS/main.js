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

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "created this ";
    var part_3 = "sentence using ";
    var part_4 = "concatenate.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}