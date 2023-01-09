window.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("click", (e) => {
     
      if (e === "gota") {
        //Si se clica la imagen de la gota
        alert("¡Has clicado la gota de agua!");

      } else if (e  === "button") {
        //Si se clica el boton
        alert("¡Has clicado el boton azul!");
        
      }
    });
  });