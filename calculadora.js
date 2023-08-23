
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var calcularButton = document.getElementById("calcular");
    calcularButton.addEventListener("click", calcularDescuentoRecargo);
});

function calcularDescuentoRecargo() {
    var nombre = document.getElementById("nombre").value;
    var estrato = parseInt(document.getElementById("estrato").value);
    var resultadoNombre = document.getElementById("resultado-nombre");
    var resultadoEstrato = document.getElementById("resultado-estrato");
    var resultadoDescuento = document.getElementById("resultado-descuento");
    var resultadoRecargo = document.getElementById("resultado-recargo");
    var resultadoNeto = document.getElementById("resultado-neto");

    // Tabla de descuento y recargo
    var tabla = {
        1: { descuento: 0.4, recargo: 0 },
        2: { descuento: 0.3, recargo: 0 },
        3: { descuento: 0.1, recargo: 0 },
        4: { descuento: 0, recargo: 0.1 },
        5: { descuento: 0, recargo: 0.2 },
        6: { descuento: 0, recargo: 0.4 }
    };

    if (!isNaN(estrato) && estrato >= 1 && estrato <= 6) {
        resultadoNombre.textContent = nombre;
        resultadoEstrato.textContent = "Estrato " + estrato;
        resultadoDescuento.textContent = (tabla[estrato].descuento * 100) + "%";
        resultadoRecargo.textContent = (tabla[estrato].recargo * 100) + "%";

        // Calcular el valor neto a pagar (suponemos un costo base de $1000)
        var costoBase = 1000000;
        var descuento = costoBase * tabla[estrato].descuento;
        var recargo = costoBase * tabla[estrato].recargo;
        var netoAPagar = costoBase - descuento + recargo;

        resultadoNeto.textContent = "$" + netoAPagar.toFixed(2);
    } else {
        alert("Por favor, ingrese un estrato válido (1-6).");
    }
}
