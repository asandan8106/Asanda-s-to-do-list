// Load tasks from local storage on page load
window.onload = function () {
    loadTasks();
};

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Remove</button>
            <button onclick="markAsComplete(this)">Complete</button>`;
        document.getElementById("todo-list").appendChild(listItem);

        saveTasks();
        taskInput.value = "";
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
    saveTasks();
}

function markAsComplete(button) {
    const listItem = button.parentElement;
    listItem.removeChild(button.previousElementSibling); // Remove 'Remove' button
    listItem.removeChild(button); // Remove 'Complete' button
    document.getElementById("completed-list").appendChild(listItem);
    saveTasks();
}

function saveTasks() {
    const todos = Array.from(document.getElementById("todo-list").children).map(
        (li) => li.textContent.replace("RemoveComplete", "")
    );
    const completed = Array.from(document.getElementById("completed-list").children).map(
        (li) => li.textContent
    );

    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completed", JSON.stringify(completed));
}

function loadTasks() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const completed = JSON.parse(localStorage.getItem("completed")) || [];

    todos.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${task}
            <button onclick="removeTask(this)">Remove</button>
            <button onclick="markAsComplete(this)">Complete</button>`;
        document.getElementById("todo-list").appendChild(listItem);
    });

    completed.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        document.getElementById("completed-list").appendChild(listItem);
    });
}
function selectDay(day) {
    // Clear the "active" class from all buttons
    const buttons = document.querySelectorAll('.days-of-week button');
    buttons.forEach(button => button.classList.remove('active'));

    // Highlight the selected day
    const selectedButton = Array.from(buttons).find(btn => btn.textContent === day);
    if (selectedButton) selectedButton.classList.add('active');

    // Optional: Display the selected day
    console.log(`Selected day: ${day}`);
}
// Placeholder JavaScript if needed for additional interactivity
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const row = e.target.closest('tr');
      if (e.target.checked) {
        row.style.backgroundColor = '#e0ffe0'; 
      } else {
        row.style.backgroundColor = 'transparent';
      }
    });
  });
  
