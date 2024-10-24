let taskList = [];

document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskListElement = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function() {
        const taskInput = prompt("Adicione uma tarefa:");
        if (taskInput !== null && taskInput !== "") {
            const task = {
                id: Date.now(),
                title: taskInput,
                completed: false
            };
            taskList.push(task);
            renderTaskList();
        }
    });

    taskListElement.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const taskId = event.target.dataset.taskId;
            const task = taskList.find(task => task.id === taskId);
            task.completed = !task.completed;
            renderTaskList();
        }
    });

    function renderTaskList() {
        taskListElement.innerHTML = "";
        taskList.forEach(task => {
            const taskElement = document.createElement("LI");
            taskElement.dataset.taskId = task.id;
            taskElement.textContent = task.title;
            if (task.completed) {
                taskElement.style.textDecoration = "line-through";
            }
            taskListElement.appendChild(taskElement);
        });
    }
});