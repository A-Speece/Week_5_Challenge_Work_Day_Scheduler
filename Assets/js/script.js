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

// Variables for Date/Time //
var datetime = null,
  date = null;
var currentHour = null;

//Function to setup the date and time //
var datetime_update = function () {
  date = moment(new Date());

  datetime.html(date.format(" dddd  Do MMMM YYYY [at] hh:mm:ss"));
};

$(document).ready(function () {
  currentHour = parseInt(moment(new Date()).format("H"));
  console.log(currentHour);

  //saved 9 am event //
  loadTimeBlock("nineAmSavedInput", nineAmEvent, 9);

  //saved 10 am event //
  loadTimeBlock("tenAmSavedInput", tenAmEvent, 10);

  //saved 11 am event //
  loadTimeBlock("elevenAmSavedInput", elevenAmEvent, 11);

  //saved 12 pm event //
  loadTimeBlock("twelvePmSavedInput", twelvePmEvent, 12);

  //saved 1 pm event //
  loadTimeBlock("onePmSavedInput", onePmEvent, 13);

  //saved 2 pm event //
  loadTimeBlock("twoPmSavedInput", twoPmEvent, 14);

  //saved 3 pm event //
  loadTimeBlock("threePmSavedInput", threePmEvent, 15);

  //saved 4 pm event //
  loadTimeBlock("fourPmSavedInput", fourPmEvent, 16);

  //saved 5 pm event //

  loadTimeBlock("fivePmSavedInput", fivePmEvent, 17);

  datetime = $("#currentDay");
  datetime_update();
  setInterval(datetime_update, 1000);
});

function loadTimeBlock(inputKey, textArea, time) {
  var Event = JSON.parse(localStorage.getItem(inputKey));
  textArea.value = Event;

  if (currentHour > time) {
    $(textArea).addClass("past");
  } else if (currentHour === time) {
    $(textArea).addClass("present");
  } else if (currentHour < time) {
    $(textArea).addClass("future");
  }
}

// save each time slot into the local storage when the save button is clicked//
// 9 am //
nineAmButton.addEventListener("click", function () {
  var nineAmSavedInput = nineAmEvent.value;
  localStorage.setItem("nineAmSavedInput", JSON.stringify(nineAmSavedInput));
});
// 10 am //
tenAmButton.addEventListener("click", function () {
  var tenAmSavedInput = tenAmEvent.value;
  localStorage.setItem("tenAmSavedInput", JSON.stringify(tenAmSavedInput));
});
// 11 am //
elevenAmButton.addEventListener("click", function () {
  var elevenAmSavedInput = elevenAmEvent.value;
  localStorage.setItem(
    "elevenAmSavedInput",
    JSON.stringify(elevenAmSavedInput)
  );
});
// 12 pm //
twelvePmButton.addEventListener("click", function () {
  var twelvePmSavedInput = twelvePmEvent.value;
  localStorage.setItem(
    "twelvePmSavedInput",
    JSON.stringify(twelvePmSavedInput)
  );
});
// 1 pm //
onePmButton.addEventListener("click", function () {
  var onePmSavedInput = onePmEvent.value;
  localStorage.setItem("onePmSavedInput", JSON.stringify(onePmSavedInput));
});
// 2 pm //
twoPmButton.addEventListener("click", function () {
  var twoPmSavedInput = twoPmEvent.value;
  localStorage.setItem("twoPmSavedInput", JSON.stringify(twoPmSavedInput));
});
// 3 pm //
threePmButton.addEventListener("click", function () {
  var threePmSavedInput = threePmEvent.value;
  localStorage.setItem("threePmSavedInput", JSON.stringify(threePmSavedInput));
});
// 4 pm //
fourPmButton.addEventListener("click", function () {
  var fourPmSavedInput = fourPmEvent.value;
  localStorage.setItem("fourPmSavedInput", JSON.stringify(fourPmSavedInput));
});
// 5 pm //
fivePmButton.addEventListener("click", function () {
  var fivePmSavedInput = fivePmEvent.value;
  localStorage.setItem("fivePmSavedInput", JSON.stringify(fivePmSavedInput));
});
