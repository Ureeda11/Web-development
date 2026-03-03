// Load tasks from Local Storage OR start with empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

// Show tasks when page loads
renderTasks();

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Task cannot be empty");
    return;
  }

  if (editIndex === null) {
    // CREATE
    tasks.push(text);
  } else {
    // UPDATE
    tasks[editIndex] = text;
    editIndex = null;
  }

  input.value = "";
  saveToLocalStorage();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  // READ
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-gray-50 p-2 rounded";

    li.innerHTML = `
      <span>${task}</span>
      <div class="flex gap-2">
        <button
          onclick="editTask(${index})"
          class="text-sm bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onclick="deleteTask(${index})"
          class="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    `;

    list.appendChild(li);
  });
}

function editTask(index) {
  document.getElementById("taskInput").value = tasks[index];
  editIndex = index;
}

function deleteTask(index) {
  // DELETE
  tasks.splice(index, 1);
  saveToLocalStorage();
  renderTasks();
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}