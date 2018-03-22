function submitAnswers() {
	var total = 4;
	var wins = 0;
	var losses = 0;
	
	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	
	//validation all answered	
	for(i = 1; i <= total; i++){
		if(eval('q' + i) == null || eval('q' + i) == '') {
			alert('You missed question ' + i);
			return false;
		}	
	}
	
	//set correct answers
	var answers = ['c', 'a', 'c', 'a'];
	
	//check answers
	for(i = 1; i <= total; i++){
		if(eval('q' + i) === answers[i - 1]){
		wins++;
		}
		
		else {
		losses++;	
		}
	}

	//display results
	var results = document.getElementById('results');
	results.innerHTML = '<h1 style="font-weight: bold;">Correct answers: <span>' + wins + '</span> <br> Incorrect answers: <span>' + losses + '</span> <br> Total questions: <span>' + total + '</span> <br> Thanks for playing!</h1>';	
		
	alert('You scored ' + wins + ' out of ' + total + '!');
	
	return false;
}