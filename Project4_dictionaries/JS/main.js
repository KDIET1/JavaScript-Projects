function my_Dictionary() {
    var Animal={
        Species:"Dog",
        Color:"Brindle",
        Breed:"Pitbull",
        Age:6,
        Sound:"Howl!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}