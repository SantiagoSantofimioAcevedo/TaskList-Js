// Obtener elementos del DOM
const textArea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('.btn');
const taskList = document.getElementById('taskList');

// Funcion para actualizar el contador a medida que escribimos
function actualizarContador() {
    const maxLength = textArea.maxLength;
    const currentLength = textArea.value.length;
    counter.textContent = maxLength - currentLength;
}

// Función para convertir el texto que escribimos a mayuscula
function convertirMayusculas() {
    textArea.value = textArea.value.toUpperCase();
}

// Función para convertir el texto que escribimos a minuscula
function convertirMinusculas() {
    textArea.value = textArea.value.toLowerCase();
}

// Función para generar la lista de tareas 
function generarListaTareas() {
    const task = textArea.value.trim();
    if (task) {
        // Crear nuevo elemento de tarea
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <p>${task}</p>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        
        // Añadir eventos a los botones de la tarea
        taskItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskItem.remove();
        });
        
        // Añadir tarea a la lista
        taskList.appendChild(taskItem);
        
        // Limpiar textarea y actualizar contador
        textArea.value = '';
        actualizarContador();
    }
}

// Asignar funciones a los botones
buttons[0].addEventListener('click', convertirMayusculas);
buttons[1].addEventListener('click', convertirMinusculas);
buttons[2].addEventListener('click', generarListaTareas);

// Actualizar el contador al cargar la página
actualizarContador();

