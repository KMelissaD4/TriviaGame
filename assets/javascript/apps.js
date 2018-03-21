// JavaScript Document

var number = 60;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#timer").html("<h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time is up!");
  }
}

//  The stop function
function stop() {
  clearInterval(intervalId);
}

//Execute the run function.
run();