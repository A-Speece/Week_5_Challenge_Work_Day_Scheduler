//Global Variables
var nineAmEvent = document.getElementById("9am-event");
var nineAmButton = document.getElementById("button-9am");
var tenAmEvent = document.getElementById("10am-event");
var tenAmButton = document.getElementById("button-10am");
var elevenAmEvent = document.getElementById("11am-event");
var elevenAmButton = document.getElementById("button-11am");
var twelvePmEvent = document.getElementById("12pm-event");
var twelvePmButton = document.getElementById("button-12pm");
var onePmEvent = document.getElementById("1pm-event");
var onePmButton = document.getElementById("button-1pm");
var twoPmEvent = document.getElementById("2pm-event");
var twoPmButton = document.getElementById("button-2pm");
var threePmEvent = document.getElementById("3pm-event");
var threePmButton = document.getElementById("button-3pm");
var fourPmEvent = document.getElementById("4pm-event");
var fourPmButton = document.getElementById("button-4pm");
var fivePmEvent = document.getElementById("5pm-event");
var fivePmButton = document.getElementById("button-5pm");
var nineAmSavedEvent = " ";
// Variables for Date/Time //
var datetime = null,
  date = null;

//Function to setup the date and time //
var datetime_update = function () {
  date = moment(new Date());
  datetime.html(date.format(" dddd  Do MMMM YYYY [at] hh:mm:ss"));
};

$(document).ready(function () {
  datetime = $("#currentDay");
  datetime_update();
  setInterval(datetime_update, 1000);
});

// save each time slot into the local storage when the save button is clicked//
nineAmButton.addEventListener("click", function () {
  var nineAmSavedInput = nineAmEvent.value;
  localStorage.setItem("nineAmSavedInput", JSON.stringify(nineAmSavedInput));
});

tenAmButton.addEventListener("click", function () {
  var tenAmSavedInput = tenAmEvent.value;
  localStorage.setItem("tenAmSavedInput", JSON.stringify(tenAmSavedInput));
});

elevenAmButton.addEventListener("click", function () {
  var elevenAmSavedInput = elevenAmEvent.value;
  localStorage.setItem(
    "elevenAmSavedInput",
    JSON.stringify(elevenAmSavedInput)
  );
});

twelvePmButton.addEventListener("click", function () {
  var twelvePmSavedInput = twelvePmEvent.value;
  localStorage.setItem(
    "twelvePmSavedInput",
    JSON.stringify(twelvePmSavedInput)
  );
});

onePmButton.addEventListener("click", function () {
  var onePmSavedInput = onePmEvent.value;
  localStorage.setItem("onePmSavedInput", JSON.stringify(onePmSavedInput));
});

twoPmButton.addEventListener("click", function () {
  var twoPmSavedInput = twoPmEvent.value;
  localStorage.setItem("twoPmSavedInput", JSON.stringify(twoPmSavedInput));
});

threePmButton.addEventListener("click", function () {
  var threePmSavedInput = threePmEvent.value;
  localStorage.setItem("threePmSavedInput", JSON.stringify(threePmSavedInput));
});

fourPmButton.addEventListener("click", function () {
  var fourPmSavedInput = fourPmEvent.value;
  localStorage.setItem("fourPmSavedInput", JSON.stringify(fourPmSavedInput));
});

fivePmButton.addEventListener("click", function () {
  var fivePmSavedInput = fivePmEvent.value;
  localStorage.setItem("fivePmSavedInput", JSON.stringify(fivePmSavedInput));
});

//when window is refresh. keep saved event input//
window.addEventListener("load", (event) => {
  console.log(nineAmSavedEvent);
});
