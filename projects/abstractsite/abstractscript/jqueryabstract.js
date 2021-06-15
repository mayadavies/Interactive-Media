


 var white="white";
 


//declaring color palette in an array
 var colorPalette = [white];

/*
console.log(Math.random()); //Math.random creates a value between 0-1 (always a decimal)
console.log(Math.floor(Math.random())); //math.floor rounds down to a nearest whole number
console.log(Math.floor(Math.random() * 6)); */


var randomColor = Math.floor(Math.random() * colorPalette.length);$("body").css("background-color",colorPalette[randomColor]);
//command '/'' makea a whole line a comment//

let mouseCursor = document.querySelector(".cursor")
let lis = document.querySelectorAll(".li")

window.addEventListener("mousemove", cursor)

function cursor(e) {
	mouseCursor.style.top = e.pageY + "px"
	mouseCursor.style.left = e.pageX + "px"


}



$(document).hover(function(event){
	var code= event.which; //keycode

	if (code==65) { //the keycode for 'a' is 65
	increaseWidth+=10
	//increaseWidth=increaseWidth +1;
	//simplified : increaseWidth ++
		console.log("the 'a' key is down");

		$("#box-container div").css("width",increaseWidth);

	}else {
		console.log("typing other letters");
		increaseHeight+=10;
		$("#box-container div").css("height",increaseHeight);

 //good for testing
		
	};

});

