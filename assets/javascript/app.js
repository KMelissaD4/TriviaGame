		<div id="results"></div>		
		<div id="results"></div>		
// JavaScript Document
var counter = 0;
var timeleft = 10;
var audio = new Audio("../sounds/Law-and-order-sound.mp3")

function convertSeconds(s) {
	var min = floor(s / 60);
	var sec = s % 60;
}

function setup() {
	var timer = select("#timer");
	timer.html(convertSeconds(timeleft - counter));

	var interval = setInterval(timeIt, 1000);

	function timeIt() {
		counter++;
		timer.html(convertSeconds(timeleft - counter));
		if (counter === timeleft) {
			audio.play();
			//counter = 0;
			clearInterval(interval);
		}
	}	
}