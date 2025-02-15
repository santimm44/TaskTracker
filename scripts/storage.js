
const saveToStorage = (task, dueDate, status, priority, description) => {
    let taskList = getLocalStorage();
    
    let array = {
        TaskName: task,
        DueDate: dueDate,
        TaskStatus: status,
        PriorityStatus: priority,
        TaskDescription: description
    }
    taskList.push(array);

    localStorage.setItem("TaskTracker", JSON.stringify(taskList))
}
const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("TaskTracker");
    
    if (localStorageData == null) {
        return []
    }
    return JSON.parse(localStorageData);
}

export {getLocalStorage, saveToStorage}

//May not need to remove items, but instead edit them
// const removeFromFavorites = (indexLocation) => {
//     let taskList = getLocalStorage();
//     let taskIndex = namesList.find(task => task.id == indexLocation)

//     taskList.splice(taskIndex, 1)
//     localStorage.setItem("TaskTracker", JSON.stringify(namesList))
// }
