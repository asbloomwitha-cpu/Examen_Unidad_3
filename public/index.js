import "./main.css";

const formulario = document.querySelector("#formulario");
const expresion = document.querySelector("#expresion");
const texto = document.querySelector("#texto");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    try {
        const regex = new RegExp(expresion.value);

        if (regex.test(texto.value)) {
            resultado.textContent = "El texto cumple con la expresión regular.";
            resultado.className = "correcto";
        } else {
            resultado.textContent = "El texto no cumple con la expresión regular.";
            resultado.className = "incorrecto";
        }
    } catch (error) {
        resultado.textContent = "La expresión regular no es válida.";
        resultado.className = "incorrecto";
    }

    resultado.hidden = false;
});

document.querySelector("#limpiar").addEventListener("click", function () {
    formulario.reset();
    resultado.textContent = "";
    resultado.hidden = true;
});