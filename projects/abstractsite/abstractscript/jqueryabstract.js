

//declaring color palette background color

var black="black";
var colorPalette = [black];
var randomColor = Math.floor(Math.random() * colorPalette.length);$("body").css("background-color",colorPalette[randomColor]);

//custom cursor settings
let mouseCursor = document.querySelector(".cursor")

let lis = document.querySelectorAll(".li")
window.addEventListener("mousemove", cursor)

function cursor(e) {
	mouseCursor.style.top = e.pageY + "px"
	mouseCursor.style.left = e.pageX + "px"


}




