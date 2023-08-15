// inputs
let inputActivity = document.querySelector("#inputActivity");
let inputDate = document.querySelector("#inputDate");
let inputTime = document.querySelector("#inputTime");

// buttons
let addTaskBtn = document.querySelector("#addTaskBtn");
let allClearBtn = document.querySelector("#allClearBtn");

// table
let displayTable = document.querySelector("#displayTable");
let line = document.querySelector("#line");

let tasks = JSON.parse(localStorage.getItem("taskEntries"));

let taskList = "";

if (tasks == null) {
    taskList = `<tr id="mssg"><td>Add a Task.</td></tr>`;
} else {

    tasks.forEach((n) => {
        taskList += `<tr><td>${n.     activity}</td> <td>${n.date}</td> <td>${n.time}</td><td>${n.action}</td></tr>`;;
    });
}

displayTable.innerHTML = taskList;

let addTask = () => {

    if (tasks == null) {
        tasks = [];
    }

    let task = {
        activity: inputActivity.value,
        date: inputDate.value,
        time: inputTime.value,
        action: `<input type="checkbox">`
    }

    tasks.push(task);
    console.log(tasks);

    localStorage.setItem("taskEntries", JSON.stringify(tasks));

    if (tasks.length == 1) {
        let mssg = document.querySelector("#mssg");
        mssg.style.display = "none";
    }



    let taskItem = document.createElement("tr");
    taskItem.innerHTML = `<td>${task. activity}</td> <td>${task.date}</td> <td>${task.time}</td><td class="check">${task.action}</td>`;

    displayTable.appendChild(taskItem);
}

let clear = () => {
    localStorage.clear();
    displayTable.innerHTML = `<tr id="mssg"><td>Add a Task.</td></tr>`;
}

// event
addTaskBtn.addEventListener("click", addTask);
allClearBtn.addEventListener("click", clear)



