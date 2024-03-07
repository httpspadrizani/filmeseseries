var cor= "preto";

function MudarCor() {
    if (cor = "preto") {
        document.body.style.backgroundColor = "white";
    }
    else {
        document.body.style.backgroundColor = "black";
        cor = "preto";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const mostrarCardBtn = document.getElementById("mostrarcard");
    const cardContainer = document.getElementById("cardContainer");
  
    mostrarCardBtn.addEventListener("click", function() {
      // Toggle para exibir/ocultar o cardContainer
      cardContainer.classList.toggle("hidden");

    });
});