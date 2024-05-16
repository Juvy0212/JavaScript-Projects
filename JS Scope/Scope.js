var x=100;

function scope_function2(){
    var sum = x + 300;
    document.getElementById("add2").innerHTML = sum;

}
function scope_function1(){

    document.getElementById("add1").innerHTML = x + 500;
}

function inside(){
    var y = 80;
    document.getElementById("add3").innerHTML = y + 700;
}

var answer= scope_function1() + inside();

function IfElse_function(){

    if (new Date().getHours()<18){
        document.getElementById("Ifelse").innerHTML = "How are you today?";
    }
    else{
        document.getElementById("Ifelse").innerHTML = "Thank you Bye!";
    }
}

function newIf() {
    var age = 18;
    if (age === 18) {
        document.getElementById("ifState").innerHTML = "Hi you can proceed with the voting";
    } else {
        document.getElementById("ifState").innerHTML = "You are too young to vote.";
    }
}

function Age_function(){
    Age=document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are ready to vote!";
    }
    else{
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old?").innerHTML = Vote;
}


function dog_function(){
    dogs=document.getElementById("dogs").value;
    if (dogs >=2){
        canI = "Can I have one dog please?";
    }
    else{
        canI = "Wow! that's good";
    }
    document.getElementById("num_dog").innerHTML = canI;
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0){
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time <= 18){
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}