document.addEventListener("DOMContentLoaded", function() {
    
    
    //Cuenta atras
    var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cuentaAtras").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cuentaAtras").innerHTML = "¡Nuevo Año, nuevos Propósitos!";
    }
    }, 1000);

    //Los propostios de Año nuevo
    // Obtener referencias a los elementos del DOM
    const addButton = document.getElementById('add-task');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const todosContainer = document.getElementById('todos');

    // Función para agregar un nuevo propósito
    function addTodo() {
        // Obtener los valores de los campos de entrada
        const title = titleInput.value;
        const content = contentInput.value;

        // Crear un nuevo elemento div para mostrar el propósito
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-item';

        // Crear elementos para mostrar el título, el contenido y el botón de borrar
        const todoTitle = document.createElement('h3');
        todoTitle.textContent = title;

        const todoContent = document.createElement('p');
        todoContent.textContent = content;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.classList.add('btn');

        // Evento de clic para borrar el propósito
        deleteButton.addEventListener('click', function () {
            todosContainer.removeChild(todoDiv);
        });

        // Agregar los elementos al div del propósito
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoContent);
        todoDiv.appendChild(deleteButton);

        // Agregar el div del propósito al contenedor principal
        todosContainer.appendChild(todoDiv);

        // Limpiar los campos de entrada después de agregar el propósito
        titleInput.value = '';
        contentInput.value = '';
    }

    // Evento de clic para agregar un propósito cuando se hace clic en el botón "Añadir"
    addButton.addEventListener('click', addTodo);
});
