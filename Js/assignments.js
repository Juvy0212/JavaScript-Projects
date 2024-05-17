function Calculate_Display(){
    var num1 = 100, num2 = 456;
    var sum = num1 + num2;
    var phrase = "The answer is ";
    var sentence = phrase + sum;
    document.getElementById("Concatenate").innerHTML = sentence;
}