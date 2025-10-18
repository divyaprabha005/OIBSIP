const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => createTaskElement(task));

// Add task
addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    createTaskElement(task);
    taskInput.value = '';
  }
});

// Create task element
function createTaskElement(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
