function Ride_Function(){
    var height, Can_ride;
    height=document.getElementById("Height").value;
    Can_ride=(Height<52)? "You are too short ": "You are tall enough";
    document.getElementById("Ride").innerHTML =Can_ride + "to ride.";
}

function vote_function(){
    var vote, Age;
    vote=document.getElementById("Age").value;
    Can_vote = (vote<18)? "You are too young": "You are old enough to vote."
    document.getElementById("vote").innerHTML = Can_vote + "to vote"
}


//This is a this function
function Vehicles(Make, Model, Year, Color){
        this.Vehicles_Make = Make;
        this.Vehicles_Model = Model;
        this.Vehicles_Year = Year;
        this.Vehicles_Color = Color;
}
var Jack = new Vehicles("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicles("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicles("Ford", "Pinto", 1971, "Mustard");

function my_function(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erick drives a "+ Erik.Vehicles_Color + " -colored " + Erik.Vehicles_Model +
    " manufactured date is " + Erik.Vehicles_Year;
}

//this is a new keyword

function new_keyword(Age, Year, Course ){
    this.Subject_Age = Age;
    this.Subject_Year = Year;
    this.Course = Course;

}

var Jacks = new new_keyword("10", "2020", "BSIT");
var Emilys = new new_keyword("11", "2021", "BSIT");
var Eriks  = new new_keyword("10", "2020", "BSIT");

function my_functions(){

    document.getElementById("New_and_This").innerHTML = 
    "Emily is a " + Emilys.Course + " at Laguna University, she is" + Emilys.Subject_Age +
    " years of age at year " + Emilys.Subject_Year;
}

//const function
function Person(FirstN, LastN, Age, favC){
    this.info_FirstN = FirstN;
    this.info_LastN = LastN;
    this.info_Age = Age;
    this.info_favC =favC;

}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


function const_function(){
    document.getElementById("new_info").innerHTML =
    "My father's first name is " + myFather.info_FirstN + " and his last name is " +
    myFather.info_LastN + " he is " + myFather.info_Age + " years of age " + "and his favorite color is " +
    myFather.info_favC;

}

//count function

function count_function(){
    document.getElementById("Counting").innerHTML = Count();

    function Count(){
        var Starting_point = 9;
        function Plus_one(){ Starting_point += 1;}
        Plus_one();
        return Starting_point;

    }
}

function min_function(){
    document.getElementById("Nested_Function").innerHTML = submin();

    function submin(){
        var startpoint = 10;
        function minus_one(){startpoint -= 1;}
        minus_one();
        return startpoint;
    }
}