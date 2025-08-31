let valor = 0;

const boton = document.getElementById("sumar");

boton.addEventListener("click", function() {
    valor += 1;
    document.getElementById("contador").textContent = valor;
});