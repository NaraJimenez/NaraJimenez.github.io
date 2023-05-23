(function() {

    var todoApp = (function() {
        document.addEventListener("DOMContentLoaded", function() {
            init();
        });

        var init = function() {
            document.getElementById("add-task").addEventListener("click", function() {
                var newTitle = document.getElementById("title").value,
                    newContent = document.getElementById("content").value;
                if (validate(newTitle)) {
                    addTodo(newTitle, newContent);
                }
            }, false);

            document.getElementById("todos").addEventListener("click", function(e) {
                if (e.target && e.target.nodeName == "BUTTON") {
                    deleteTodo(e.target.parentNode);
                }
            }, false);
        };

        //Validación del campo de Añadir nueva tarea
        var validate = function(newTitle) {
            if (newTitle.length === 0) {
                alert("Es necesario rellenar el campo");
                return false;
            } else {
                return true;
            }
        };

        //Se añade la tarea y se muestra
        var addTodo = function(title, content) {
            var newTodo = document.createElement("section"),
                h2 = document.createElement("h2"),
                newTitle = document.createTextNode(title),
                p = document.createElement("p"),
                newContent = document.createTextNode(content),
                button = document.createElement("button"),
                deleteBtn = document.createTextNode("Eliminar");

            h2.appendChild(newTitle);
            newTodo.appendChild(h2);
            p.appendChild(newContent);
            newTodo.appendChild(p);
            button.appendChild(deleteBtn);
            newTodo.appendChild(button);

            document.getElementById("todos").appendChild(newTodo);
            document.getElementById("form").reset();

        };

        //Eliminar la tarea
        var deleteTodo = function(todo) {
            todo.parentNode.removeChild(todo);
        };
    }());
}());

        var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

        // Cuenta atras por cada segundo
        var x = setInterval(function() {

        //Fehca actual
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Lo que mostramos por pantalla
        document.getElementById("cuentaAtras").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
            
        // Mensaje si se acaba el tiempo
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("cuentaAtras").innerHTML = "'Nuevo Año, nuevos Propositos!";
        }
        }, 1000);