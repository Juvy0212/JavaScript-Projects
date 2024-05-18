//while loop
function count_to_ten(){
    var digit = ""
    var x = 1;
    while (x < 11){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_ten").innerHTML = digit;
}


//for loop
var instrument = ["Guitar","Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;

function for_loop(){
    for (y = 0; y < instrument.length; y++){
    content += instrument[y] + "<br>";     
   }
   document.getElementById("List_of_Instruments").innerHTML = content;
}

//challenge

var names = ["Juvy","Mac", "Maxine", "Matthew", "irene"];
var cont = "";
var y;

function for_loop2(){
    for (y = 0; y < names.length; y++){
    cont+= names[y] + "<br>";     
   }
   document.getElementById("List_of_names").innerHTML = cont;
}

//array

function cat_pics(){
    var Cat_Pictures = [];
    Cat_Pictures [0] ="sleeping";
    Cat_Pictures [1] = "playing";
    Cat_Pictures [2] = "eating";
    Cat_Pictures [3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is "+ Cat_Pictures[2] + ".";
}

//challenge
function students_functions(){
    var students = [];
    students [0] ="Max";
    students [1] = "Matt";
    students [2] = "Mark";
    students [3] = "Juvy";
    document.getElementById("students").innerHTML = "The first student who always go in library is "+ students[0] + ".";
}

//constt
function constant_function(){
    const Musical_instrument = { type:"guitar", brand: "Fender", color: "black"};
    Musical_instrument.color = "blue";
    Musical_instrument.price = "$2900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_instrument.type + "was" + Musical_instrument.price;
}
//const challenge
function constantC_function(){
    const matt_att = { eyes:"brown", height: "50 inches", age: "1"};
    matt_att.gender = "boy";
    matt_att.age = "1";
    document.getElementById("Constant_Challenge").innerHTML = "Matthew is a " + matt_att.gender  + "he is only " +  matt_att.age + " years old.";
}

//let let_challenge(){
    function let_Challenge(){
    var x = 90;
        document.write(x + "<br>") ;{
        let x = 80;
        document.write(x + "<br>");
        }
        document.write(x + "<br>");
    }

    //object 
    document.addEventListener("DOMContentLoaded", function() {
        let car = {
            make: "Dodge ",
            model: "Viper ",
            year: "2021",
            color: "red",
            description: function() {
                return "The car is a " + this.year + " " + this.color + " " + this.make + this.model;
            }
        };
        document.getElementById("car_object").innerHTML = car.description();
    });
    
  
  //object challenge
  document.addEventListener("DOMContentLoaded", function() {
    let student = {
        age: "9",
        gender: "female",
        Birth: "2015",
        height: "167",
        description: function() {
            return "The student is " + this.age + " years of age she is " + this.gender + " born on year " + this.Birth +"with a height of " + this.height;
        }
    };
    document.getElementById("object_Challenge").innerHTML = student.description();
});

//break  challenge

function breakFunction() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // Exit the loop when i is 5
        }
        result += i + " Happy Birthday! <br>";
    }
    document.getElementById("break_Id").innerHTML = result.trim();
}


//continue challenge

function continueFunction() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue; // Skip the even numbers
        }
        result += i + " Happy New Year!!! <br>";
    }
    document.getElementById("continue_Id").innerHTML = result.trim();
}

    