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
