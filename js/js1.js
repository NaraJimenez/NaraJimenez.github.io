window.addEventListener("DOMContentLoaded", (event) => {

  window.addEventListener("click", (e) => {
    if (e.target.id === "gota") {
      // Si se hace clic en la imagen de la gota
      alert("¡Has clicado la gota de agua!");
    } else if (e.target.id === "button") {
      // Si se hace clic en el botón
      alert("¡Has clicado el botón azul!");
    }
  });
  });
  
  