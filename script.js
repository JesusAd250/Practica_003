document.addEventListener("DOMContentLoaded", function () {

    let boton = document.createElement("button");
    boton.textContent = "Enviar datos";
    boton.id = "boton";

    boton.addEventListener("click", function () {
        alert("Datos enviados.");
    });

    document.body.appendChild(boton);
});
