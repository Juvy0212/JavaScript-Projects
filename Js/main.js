//let exampleVariable = 42;
//document.write("The data type of exampleVariable is: " + typeof exampleVariable);


let num = 10;  // num is a number
let str = "20"; // str is a string containing "20"

let result = num + str; // JavaScript will coerce `num` to a string and then perform concatenation

document.write("Result of num + str: " + result);


document.write(2E310);
document.write(-3E310);

document.write(18>=22);

document.write(1800012>=22);

var num1=14;
var num2=44;
var sum= num1+num2;

console.log("The sum of", num1, "and", num2, "is", sum);

document.write((122+122)==244);//display true when they are equal
document.write((122+123)==244);//display false


//Display true or false if the data fro right and left are equal and with same data types
var x = 90;
var y = 90;
document.write(x===y);

var a = 90;
var b = 96;
document.write(a===b);

var c = 90;
var d = '90';
document.write(c===d);

var e = '90';
var f = '90';
document.write(e===f);

document.write(100>2 && 10>4);

document.write(1>2 && 10>4);

document.write(100>2 || 10>4);


document.write(100<2 || 10<4);

function not_function(){
    document.getElementById("Not").innerHTML=!(5>1)
}
function not_function(){
    document.getElementById("Not").innerHTML=!(5<1);
}