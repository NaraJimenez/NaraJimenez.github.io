document.addEventListener("DOMContentLoaded", function() {
    var todoApp = (function() {
      init();
  
      function init() {
        document.getElementById("add-task").addEventListener("click", function() {
          var newTitle = document.getElementById("title").value;
          var newContent = document.getElementById("content").value;
          if (validate(newTitle)) {
            addTodo(newTitle, newContent);
          }
        }, false);
  
        document.getElementById("todos").addEventListener("click", function(e) {
          if (e.target && e.target.nodeName == "BUTTON") {
            deleteTodo(e.target.parentNode);
          }
        }, false);
      }
  
      function validate(newTitle) {
        if (newTitle.length === 0) {
          alert("Es necesario rellenar el campo");
          return false;
        } else {
          return true;
        }
      }
  
      function addTodo(title, content) {
        var newTodo = document.createElement("section");
        var h2 = document.createElement("h2");
        var newTitle = document.createTextNode(title);
        var p = document.createElement("p");
        var newContent = document.createTextNode(content);
        var button = document.createElement("button");
        var deleteBtn = document.createTextNode("Eliminar");
  
        h2.appendChild(newTitle);
        newTodo.appendChild(h2);
        p.appendChild(newContent);
        newTodo.appendChild(p);
        button.appendChild(deleteBtn);
        newTodo.appendChild(button);
  
        document.getElementById("todos").appendChild(newTodo);
        document.getElementById("form").reset();
      }
  
      function deleteTodo(todo) {
        todo.parentNode.removeChild(todo);
      }
  
      return {
        init: init,
        addTodo: addTodo,
        deleteTodo: deleteTodo
      };
    })();
    
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
  });
  