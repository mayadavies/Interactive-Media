/*
Abstract website tutorial


example of writing code to create an abstract site based on 
//http://www.abstractbrowsing.net//

*/
//declaring colours
 var red="#FF0000";
 var yellow="#FFFF00";
 var green="#81FF2B";
 var cyan="#00FFFF";
 var blue="#0000FF";
 var magenta="#FF00FF";

//declaring color palette in an array
 var colorPalette = [red,yellow,green,cyan,blue,magenta];


console.log(Math.random()); //Math.random creates a value between 0-1 (always a decimal)
console.log(Math.floor(Math.random())); //math.floor rounds down to a nearest whole number
console.log(Math.floor(Math.random() * 6)); 




//this is a test to see if my file is linked tomy html//

 console.log("hello world");
//change bg color to green/

 //$("body").css("background-color",colorPalette[2]);

$("body").css("background-color",colorPalette[Math.floor(Math.random() * 6)]);
//command '/'' makea a whole line a comment//
















