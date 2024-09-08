document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add Task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Function to add task to the list
    function addTask(taskText) {
        const li = document.createElement('li');

        // Create the task content
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        // Create the timestamp
        const timestamp = document.createElement('span');
        timestamp.textContent = `Added on: ${getCurrentTime()}`;
        timestamp.className = 'timestamp';

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Mark the task as completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Append elements to the task item
        li.appendChild(taskContent);
        li.appendChild(timestamp);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to get the current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleString(); // This will give the current date and time in a readable format
    }
});
