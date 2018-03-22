var bing = document.getElementById('bing');

var seconds = 10;
	function secondsPassed() {
		var minutes = Math.round((seconds - 30) / 60);
		var remainingSeconds = seconds % 60;
		
		if(remainingSeconds < 10) {
			remainingSeconds = '0' + remainingSeconds;
		}
		
		document.getElementById('countdown').innerHTML = minutes + ':' + remainingSeconds;
		
		if(seconds == 0) {
			clearInterval(countdownTimer);
			document.getElementById('countdown').innertHTML = 'Buzz Buzz';
		   }
		
		else{
			seconds --;
		}
	}

var countdownTimer = setInterval('secondsPassed()', 1000);
bing.play();
