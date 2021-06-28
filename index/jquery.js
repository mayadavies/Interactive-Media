
//declaring colours
 var green="#CBFF00";
 var pink="#FF13BA";
 var purple="#7D00FF";
 var lightpink="#FF96D6";
 var orange="#FF7600";
 var black="#black";
 var white ="#white"

//declaring color palette in an array
 var colorPalette = [green,purple,lightpink,orange,,black];

//random background colour//

var randomColor = Math.floor(Math.random() * colorPalette.length);

$("body").css("background-color",colorPalette[randomColor]);




//button events

function myFunction() {
  document.getElementById("demo").innerHTML = "I learned alot of beautiful ways to express myself throughout this class, thank you!";
}


function myFunction2() {
  document.getElementById("demo").innerHTML = "God, I really hope I pass this class.";
}

function myFunction3() {
  document.getElementById("demo").innerHTML = "< / endOfCourse>";
}



