import { createCards, initialDisplay } from "./dom.js"
import { saveToStorage } from "./storage.js"

initialDisplay()

const dropdownHoverButton = document.getElementById("dropdownHoverButton")
const toDoBtn = document.getElementById("toDoBtn")
const progressBtn = document.getElementById("progressBtn")
const completeBtn = document.getElementById("completeBtn")

const dropdownHoverButton2 = document.getElementById("dropdownHoverButton2")
const lowBtn = document.getElementById("lowBtn")
const mediumBtn = document.getElementById("mediumBtn")
const highBtn = document.getElementById("highBtn")

const taskNameInputField = document.getElementById("taskNameInputField")
const dueDateInputField = document.getElementById("dueDateInputField")
const taskDescriptionInputField = document.getElementById("taskDescriptionInputField")

const submitBtn = document.getElementById("submitBtn")

toDoBtn.addEventListener("click", () => {
    dropdownHoverButton.innerText = "ToDo"
})
progressBtn.addEventListener("click", () => {
    dropdownHoverButton.innerText = "Progress"
})
completeBtn.addEventListener("click", () => {
    dropdownHoverButton.innerText = "Complete"
})

lowBtn.addEventListener("click", () => {
    dropdownHoverButton2.innerText = "Low"
})
mediumBtn.addEventListener("click", () => {
    dropdownHoverButton2.innerText = "Medium"
})
highBtn.addEventListener("click", () => {
    dropdownHoverButton2.innerText = "High"
})

submitBtn.addEventListener("click", () => {

    //empty field will return "Task Status"
    //console.log("Dropdown#1 " + dropdownHoverButton.innerText)
    //empty field will return "Priority Status"
    //console.log("Dropdown#2 " + dropdownHoverButton2.innerText)
    //empty field will return ""
    //console.log("Task Name " + taskNameInputField.value)
    //empty field will return ""
    //console.log("Due Date " + dueDateInputField.value)
    //empty field will return ""  
    //console.log("taskDescriptionInputField " + taskDescriptionInputField.value)

    let taskStatus = dropdownHoverButton.innerText;
    let priorityStatus = dropdownHoverButton2.innerText;
    let taskDescription = taskDescriptionInputField.value;

    if(taskNameInputField.value !="" && dueDateInputField.value !=""){

        if(taskStatus == "Task Status"){
            taskStatus = "No Task Status"
        }
        if(priorityStatus == "Priority Status"){
            priorityStatus = "No Priority Status"
        }
        if(taskDescription == ""){
            taskDescription = "No Description"
        }

        createCards(taskNameInputField.value, dueDateInputField.value, taskStatus, priorityStatus, taskDescription)
        saveToStorage(taskNameInputField.value, dueDateInputField.value, taskStatus, priorityStatus, taskDescription)
        taskNameInputField.value =""
        dueDateInputField.value = ""
        dropdownHoverButton.innerText = "Task Status";
        dropdownHoverButton2.innerText = "Priority Status";
        taskDescriptionInputField.value = "";
        
    }

})