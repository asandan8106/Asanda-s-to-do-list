document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("add-task-form");
    const todoBody = document.getElementById("todo-body");
  
    // Load tasks from local storage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach((task) => addTaskToTable(task));
    };
  
    // Save tasks to local storage
    const saveTasks = () => {
      const tasks = [];
      const rows = todoBody.querySelectorAll("tr");
      rows.forEach((row) => {
        const task = {
          dueDate: row.querySelector("td:nth-child(1)").innerText,
          priority: row.querySelector("td:nth-child(2)").innerText,
          task: row.querySelector("td:nth-child(3)").innerText,
          who: row.querySelector("td:nth-child(4)").innerText,
          inProgress: row.querySelector("input[type='checkbox']").checked,
          done: row.querySelectorAll("input[type='checkbox']")[1].checked,
        };
        tasks.push(task);
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    // Add task to table
    const addTaskToTable = (task) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${task.dueDate}</td>
        <td class="priority ${task.priority.toLowerCase()}">${task.priority}</td>
        <td>${task.task}</td>
        <td>${task.who}</td>
        <td><input type="checkbox" ${task.inProgress ? "checked" : ""}></td>
        <td><input type="checkbox" ${task.done ? "checked" : ""}></td>
      `;
      todoBody.appendChild(row);
    };
  
    // Handle form submission
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get input values
      const dueDate = document.getElementById("due-date").value;
      const priority = document.getElementById("priority").value.toUpperCase();
      const task = document.getElementById("task").value;
      const who = document.getElementById("who").value;
  
      // Validate inputs
      if (!dueDate || !priority || !task || !who) {
        alert("Please fill in all fields!");
        return;
      }
  
      // Create task object
      const newTask = {
        dueDate,
        priority,
        task,
        who,
        inProgress: false,
        done: false,
      };
  
      // Add task to table and save to local storage
      addTaskToTable(newTask);
      saveTasks();
  
      // Clear form inputs
      taskForm.reset();
    });
  
    // Handle checkbox changes
    todoBody.addEventListener("change", () => {
      saveTasks();
    });
  
    // Load existing tasks on page load
    loadTasks();
  });
  