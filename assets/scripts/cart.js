// Mostrar modal al hacer clic en el botón "Finalizar"
document.getElementById("checkoutButton").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    // Cambiar el texto del encabezado de la página a "Compra realizada"
    document.querySelector("h1").innerText = "Compra Finalizada";
    
    // Ocultar el botón "Finalizar compra"
    document.getElementById("checkoutButton").style.display = "none";
});

// Cerrar el modal al hacer clic en la "X" (cerrar) o en el botón "Cancelar"
var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});

var cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});
