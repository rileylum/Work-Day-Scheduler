var timeBlockSection = document.querySelector(".container");


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
    timeBlockRow.setAttribute("data-index", hour - 9);

    var timeBlockTime = document.createElement("div");
    timeBlockTime.classList.add("col-2", "hour");
    timeBlockTime.textContent = moment(hour, "HH").format("hA");
    var timeBlockDesc = document.createElement("textarea");
    timeBlockDesc.classList.add("col-8", "description", "present");
    timeBlockDesc.value = scheduleArr[hour - 9];
    var timeBlockSave = document.createElement("button");
    timeBlockSave.classList.add("col-2", "saveBtn");
    var saveIcon = document.createElement("i");
    saveIcon.classList.add("fa", "fa-save", "icon-size");

    timeBlockSave.appendChild(saveIcon);

    timeBlockRow.appendChild(timeBlockTime);
    timeBlockRow.appendChild(timeBlockDesc);
    timeBlockRow.appendChild(timeBlockSave);



    timeBlockSection.appendChild(timeBlockRow);
}



var scheduleArr;
var storedScheduleArr = JSON.parse(localStorage.getItem('schedule'));

if (!storedScheduleArr) {
    // empty array of length for each hour in work day
    scheduleArr = [, , , , , , , ,];
} else {
    scheduleArr = storedScheduleArr;
};

timeBlockSection.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.tagName === 'BUTTON') {
        scheduleArr[e.target.parentElement.getAttribute('data-index')] = e.target.parentElement.children[1].value;
        localStorage.setItem('schedule', JSON.stringify(scheduleArr));

    } else {
        console.log("not button");
    };
})

for (var i = 9; i < 18; i++) {
    createTimeBlock(i);
}