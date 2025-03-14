let tasks = []; // Array para maka store

function addTask(id, name, description) {
  tasks.push({ id, name, description });
  console.log(`Task added: ${name}`);
}

function viewTasks() {
  console.log("Tasks:");
  tasks.forEach(task => {
    console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
  });
}

function updateTask(id, updatedName, updatedDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = updatedName;
    task.description = updatedDescription;
    console.log(`Task updated: ${id}`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log(`Task deleted: ${id}`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

addTask(1, "Do homework", "Complete math and science homework.");
addTask(2, "Grocery shopping", "Buy vegetables and fruits.");
viewTasks();
updateTask(1, "Finish homework", "Complete math, science, and history homework.");
deleteTask(2);
viewTasks();
