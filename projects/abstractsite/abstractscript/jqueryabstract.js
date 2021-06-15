

 var red="#FF0000";
 var green="#81FF2B";
 var blue="#0000FF";
 var black="black";

//declaring color palette in an array
 var colorPalette = [red,green,blue,black,];

/*
console.log(Math.random()); //Math.random creates a value between 0-1 (always a decimal)
console.log(Math.floor(Math.random())); //math.floor rounds down to a nearest whole number
console.log(Math.floor(Math.random() * 6)); */


var randomColor = Math.floor(Math.random() * colorPalette.length);$("body").css("background-color",colorPalette[randomColor]);
//command '/'' makea a whole line a comment//


$("button").click(function() {
    console.log("Add Box");
    $("#box-container").append("<div></div>");

});
