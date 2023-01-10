window.addEventListener("DOMContentLoaded", (event) => {

    window.addEventListener("click", (e) => {
     
      if (e.path[0].id === "gota") {
        //Si se clica la imagen de la gota
        //METER DIALOG
        alert("¡Has clicado la gota de agua!");

      } else if (e.path[0].id === "button") {
        //Si se clica el boton
        //METER DIALOG
        alert("¡Has clicado el boton azul!");
        
      }
    });
  });
  
  