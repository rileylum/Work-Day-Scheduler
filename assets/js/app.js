
// get current day from momentJS and display it on webpage
function setCurrentDay() {
    var currentDay = moment().format("dddd, MMMM Do");

    var currentDayElem = document.querySelector("#currentDay");

    currentDayElem.textContent = currentDay;
}

setCurrentDay();
