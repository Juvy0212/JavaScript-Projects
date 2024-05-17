function my_Dictionary(){
    var Juvy = {
        species: "Human",
        Color: "Tan",
        Age: 25,
        face: "Pretty"
    };
    delete Juvy.face;//this line delete the detail
    document.getElementById("Dictionary").innerHTML = Juvy.face;
    document.getElementById("Dictionary1").innerHTML = Juvy.Color;
}