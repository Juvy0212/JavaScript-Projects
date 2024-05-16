//newdocu

function addition(){
    var num1 = 1500, num2 = 60000;
    var sum = num1 + num2;
    var phrase= "The answer is ";
    var sentence = phrase + sum;
    document.getElementById("Math").innerHTML = sentence;
}

function subtraction(){
    var num1 = 1500, num2 = 60000;
    var minus = num1 - num2;
    var phrase= "The answer is ";
    var sentence = phrase + minus;
    document.getElementById("Math2").innerHTML = sentence;
}

function times(){
    var num1 = 1500, num2 = 60000;
    var times = num1 * num2;
    var phrase= "The answer is ";
    var sentence = phrase + times;
    document.getElementById("Math3").innerHTML = sentence;
}

function multiple(){
    var num1 = 199, num2 = 2000, num3=4, num4 = 20;
    var oper = num1 + num2(num3*num4);
    var phrase= "The answer is ";
    var sentence = phrase + oper;
    document.getElementById("Math4").innerHTML = sentence;
}

function more_Math(){
    var simple_Math = (199+ 2000) * 10/ 2-5;
    document.getElementById("Math4").innerHTML = "199 + 2000 times 10 diveded by 2 minus 5?"+simple_Math;
}

function modulus_Operator(){
    var simple_Math = 39 % 7;
    document.getElementById("dividend").innerHTML = "The answer is " + simple_Math;
}

function negation(){
    var simple_Math = 7;
    document.getElementById("negate").innerHTML = -simple_Math;
}

function increa(){
    var x = 5
    x++;
    document.getElementById("increament").innerHTML = x;
}

function decrea(){
    var y = 5.25;
    y--;
    document.getElementById("decreament").innerHTML = y;
}

//window.alert(Math.random()*100);// display random numbers
window.alert(Math.max(5, 10, 15, 20)) ; //find the maximum value of each number

