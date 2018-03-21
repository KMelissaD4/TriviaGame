// JavaScript Document
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
// Set the date we're counting down to
var countDownTime = new Time("00:60").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Find the distance between now and the count down date
	var distance = countDownTime - now;
	
	// Time calculations for minutes and seconds
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	// Display the result in the element with id="timer"
	document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
	
	// If the count down is finished, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "Times Up! Play again.";
	}
}, 1000);
</script>