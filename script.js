const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value == "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        // cross icon
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = ""
    // save tasks to browser's memory
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        // if we click on the span element with the...
        // cross link. 
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// anytime we add a new task, we need to call this
// function in order to save it to the browser's
// local storage

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();