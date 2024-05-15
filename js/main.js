var num1 = 5, num2 = 10;

function Calculate_Display(){
    var result= num1 + num2;

    document.getElementById("display").innerText = "The result is " + result;

}

function myFunction(){
    var sentence = "I am learning";
    sentence += "a lot from this book";
    document.getElementById("Concatenate").innerHTML = sentence;
}