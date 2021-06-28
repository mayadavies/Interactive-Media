/*
Abstract website tutorial



*/
//declaring colours
 var green="#CBFF00";
 var pink="#FF13BA";
 var purple="#7D00FF";
 var lightpink="#FF96D6";
 var orange="#FF7600";
 var black="#black";
 var white ="#white"

//declaring color palette in an array
 var colorPalette = [green,purple,lightpink,orange,white,purple];

/*
console.log(Math.random()); //Math.random creates a value between 0-1 (always a decimal)
console.log(Math.floor(Math.random())); //math.floor rounds down to a nearest whole number
console.log(Math.floor(Math.random() * 6)); */


var randomColor = Math.floor(Math.random() * colorPalette.length);

console.log ("hi");
//this is a test to see if my file is linked tomy html//


//change bg color to green/

 //$("body").css("background-color",colorPalette[2]);

$("body").css("background-color",colorPalette[randomColor]);
//command '/'' makea a whole line a comment//
//KEYBOARD EVENTS



function myFunction() {
  document.getElementById("demo").innerHTML = "I learned alot of beautiful ways to express myself throughout this class, thank you!";
}




function myFunction2() {
  document.getElementById("demo").innerHTML = "God, I really hope I pass this class.";
}

		

