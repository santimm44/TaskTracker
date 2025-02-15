import { getLocalStorage } from "./storage.js"

const cardSection = document.getElementById("cardSection")
const dropZone = document.getElementById("dropZone")
const toDo = document.getElementById("toDo")
const inProgress = document.getElementById("inProgress")


const createCards = (task, dueDate, status, priority, description) => {

    const grandFatherDiv = document.createElement("div");
    grandFatherDiv.className = "w-full m-[.25rem_0rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";
    grandFatherDiv.id = task + Math.round(Math.random() * 100000)
    grandFatherDiv.draggable = true;
    cardSection.appendChild(grandFatherDiv);


    const textParentDiv = document.createElement("div");
    textParentDiv.className = "flex flex-col items-center pb-10";
    grandFatherDiv.appendChild(textParentDiv);

    const taskTitle = document.createElement("h5");
    taskTitle.className = "mb-1 text-xl font-medium text-gray-900 dark:text-white";
    taskTitle.innerText = task;
    textParentDiv.appendChild(taskTitle);

    const descriptionText = document.createElement("span");
    descriptionText.className = "text-sm text-gray-500 dark:text-gray-400";
    descriptionText.innerText = "Due by: " + dueDate + "\n";
    descriptionText.innerText += description;
    textParentDiv.appendChild(descriptionText);

    const button1 = document.createElement("div");
    button1.className = "flex justify-around mt-4 w-full md:mt-6 relative";
    textParentDiv.appendChild(button1);

    // First button (taskBtn)
    const taskBtn = document.createElement("button");
    taskBtn.id = task + Math.round(Math.random() * 100000);
    taskBtn.className = "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
    taskBtn.innerText = status;
    button1.appendChild(taskBtn);

    // Second button (taskBtn2)
    const taskBtn2 = document.createElement("button");
    taskBtn2.id = task + Math.round(Math.random() * 100000);
    taskBtn2.className = "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
    taskBtn2.innerText = priority;
    button1.appendChild(taskBtn2);

    grandFatherDiv.addEventListener("dragstart", (event) => {

        event.dataTransfer.setData("text/plain", event.target.id)
    })


}

const initialDisplay = () => {
    let storageArray = getLocalStorage();
    console.log(storageArray);

    storageArray.forEach(element => {

        const grandFatherDiv = document.createElement("div");
        grandFatherDiv.id = element.TaskName + Math.round(Math.random() * 100000)
        grandFatherDiv.className = "w-full m-[.25rem_0rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer";
        grandFatherDiv.draggable = true;
        cardSection.appendChild(grandFatherDiv);


        const textParentDiv = document.createElement("div");
        textParentDiv.id = element.TaskName + Math.round(Math.random() * 100000)
        textParentDiv.className = "flex flex-col items-center pb-10";
        grandFatherDiv.appendChild(textParentDiv);

        const taskTitle = document.createElement("h5");
        taskTitle.className = "mb-1 text-xl font-medium text-gray-900 dark:text-white";
        taskTitle.innerText = element.TaskName;
        textParentDiv.appendChild(taskTitle);

        const descriptionText = document.createElement("span");
        descriptionText.className = "text-sm text-gray-500 dark:text-gray-400";
        descriptionText.innerText = "Due by: " + element.DueDate + "\n";
        descriptionText.innerText += element.TaskDescription;
        textParentDiv.appendChild(descriptionText);

        const button1 = document.createElement("div");
        button1.className = "flex justify-around mt-4 w-full md:mt-6 relative";
        textParentDiv.appendChild(button1);

        // First button (taskBtn)
        const taskBtn = document.createElement("button");
        taskBtn.id = element.TaskName + Math.round(Math.random() * 100000);
        taskBtn.className = "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
        taskBtn.innerText = element.TaskStatus;
        button1.appendChild(taskBtn);



        // Second button (taskBtn2)
        const taskBtn2 = document.createElement("button");
        taskBtn2.id = element.TaskName + Math.round(Math.random() * 100000);
        taskBtn2.className = "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
        taskBtn2.innerText = element.PriorityStatus;
        button1.appendChild(taskBtn2);

        grandFatherDiv.addEventListener("dragstart", (event) => {

            event.dataTransfer.setData("text/plain", event.target.id)
        })
       
    });
};

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('text/plain');

    const draggableElement = document.getElementById(data);

    event.target.appendChild(draggableElement);
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

cardSection.addEventListener("drop", (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('text/plain');

    const draggableElement = document.getElementById(data);

    event.target.appendChild(draggableElement);
})

cardSection.addEventListener('dragover', (event) => {
    event.preventDefault();
});


toDo.addEventListener("drop", (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('text/plain');

    const draggableElement = document.getElementById(data);

    event.target.appendChild(draggableElement);
})

toDo.addEventListener('dragover', (event) => {
    event.preventDefault();
});

inProgress.addEventListener("drop", (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('text/plain');

    const draggableElement = document.getElementById(data);

    event.target.appendChild(draggableElement);
})

inProgress.addEventListener('dragover', (event) => {
    event.preventDefault();
});

export { createCards, initialDisplay }