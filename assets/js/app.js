// select elements
var timeBlockSection = document.querySelector(".container");
// init variables
// get current time from momentJS
var currentTime = moment();
// set variables to store scheduled tasks
var scheduleArr;
var storedScheduleArr;

// get schedule from localStorage if it exists otherwise create an empty array
function getSchedule() {
    storedScheduleArr = JSON.parse(localStorage.getItem('schedule'));
    if (!storedScheduleArr) {
        // empty array of length for each hour in work day
        scheduleArr = [, , , , , , , ,];
    } else {
        scheduleArr = storedScheduleArr;
    };
};

// get current day from momentJS and display it on webpage
function setCurrentDay() {
    var currentDay = currentTime.format("dddd, MMMM Do");
    var currentDayElem = document.querySelector("#currentDay");
    currentDayElem.textContent = currentDay;
};

// create time blocks for each hour of the work day (9AM to 5PM) 
// which includes the time, a text input for tasks and a save button
function createTimeBlock(hour) {
    // create row element
    var timeBlockRow = document.createElement("div");
    timeBlockRow.classList.add("row", "time-block");
    timeBlockRow.setAttribute("data-index", hour - 9);
    // create element to store the time
    var timeBlockTime = document.createElement("div");
    timeBlockTime.classList.add("col-2", "hour");
    timeBlockTime.textContent = moment(hour, "HH").format("hA");
    // create element to store task
    var timeBlockDesc = document.createElement("textarea");
    timeBlockDesc.classList.add("col-8", "description", "present");
    timeBlockDesc.value = scheduleArr[hour - 9];
    // create element to save the task
    var timeBlockSave = document.createElement("button");
    timeBlockSave.classList.add("col-2", "saveBtn");
    var saveIcon = document.createElement("i");
    saveIcon.classList.add("fa", "fa-save", "icon-size");

    // append elements together and add them to the page
    timeBlockSave.appendChild(saveIcon);

    timeBlockRow.appendChild(timeBlockTime);
    timeBlockRow.appendChild(timeBlockDesc);
    timeBlockRow.appendChild(timeBlockSave);

    timeBlockSection.appendChild(timeBlockRow);
};

// when any save button is pressed on the page save that task to localStorage
timeBlockSection.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.tagName === 'BUTTON') {
        scheduleArr[e.target.parentElement.getAttribute('data-index')] = e.target.parentElement.children[1].value;
        localStorage.setItem('schedule', JSON.stringify(scheduleArr));

    } else {
        console.log("not button");
    };
})

function init() {
    setCurrentDay();
    getSchedule();

    for (var i = 9; i < 18; i++) {
        createTimeBlock(i);
    }
};

init();
