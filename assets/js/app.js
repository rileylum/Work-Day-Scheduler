
// get current day from momentJS and display it on webpage
function setCurrentDay() {
    var currentDay = moment().format("dddd, MMMM Do");

    var currentDayElem = document.querySelector("#currentDay");

    currentDayElem.textContent = currentDay;
}

setCurrentDay();

function createTimeBlock(hour) {
    var timeBlockRow = document.createElement("div");
    timeBlockRow.classList.add("row", "time-block");

    var timeBlockTime = document.createElement("div");
    timeBlockTime.classList.add("col-2", "hour");
    timeBlockTime.textContent = moment(hour, "HH").format("hA");
    var timeBlockDesc = document.createElement("textarea");
    timeBlockDesc.classList.add("col-8", "description", "present");
    var timeBlockSave = document.createElement("button");
    timeBlockSave.classList.add("col-2", "saveBtn");
    var saveIcon = document.createElement("i");
    saveIcon.classList.add("fa", "fa-save", "icon-size");

    timeBlockSave.appendChild(saveIcon);

    timeBlockRow.appendChild(timeBlockTime);
    timeBlockRow.appendChild(timeBlockDesc);
    timeBlockRow.appendChild(timeBlockSave);

    var timeBlockSection = document.querySelector(".container");

    timeBlockSection.appendChild(timeBlockRow);
}

for (var i = 9; i < 18; i++) {
    createTimeBlock(i);
}