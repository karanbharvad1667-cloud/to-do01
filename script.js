const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

// Add Task
function addTask() {

    if (inputBox.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // × symbol
    li.appendChild(span);

    inputBox.value = "";

    saveData();
}

// Add button click
addBtn.addEventListener("click", addTask);

// Press Enter to add
inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

// Check and Delete
listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// Save Data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load Data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();