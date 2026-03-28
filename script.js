// Referencias a los elementos
const producto = document.getElementById("producto");
const detalle = document.getElementById("detalle");
const form = document.getElementById("formPedido");
const mensaje = document.getElementById("mensaje");

// Al inicio el select de productos está bloqueado
detalle.disabled = true;

// Evento cuando cambia el tipo de producto
producto.addEventListener("change", function () {

    // Activar el select
    detalle.disabled = false;

    // Limpiar opciones
    detalle.innerHTML = '<option value="">Selecciona un producto</option>';

    if (this.value === "hamburguesa") {
        const hamburguesas = ["Táctica", "Supremacía", "Impacto Doble"];

        hamburguesas.forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            detalle.appendChild(option);
        });
    } 
    
    else if (this.value === "picada") {
        const picadas = ["Escudero", "Terremoto"];

        picadas.forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            detalle.appendChild(option);
        });
    }
});

// Evento al enviar el formulario
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipo = producto.value;
    const productoElegido = detalle.value;

    // Validación básica
    if (!nombre || !tipo || !productoElegido) {
        mensaje.textContent = "⚠️ Por favor completa todos los campos";
        mensaje.style.color = "red";
        return;
    }

    // Mensaje bonito
    mensaje.textContent = `✅ Gracias ${nombre}, tu pedido de ${productoElegido} (${tipo}) está en camino 🚀`;
    mensaje.style.color = "green";

    // Resetear formulario
    form.reset();
    detalle.innerHTML = '<option value="">Primero elige el tipo</option>';
    detalle.disabled = true;
});