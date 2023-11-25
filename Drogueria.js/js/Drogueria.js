// Espera a que se cargue completamente el DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene referencias a elementos del DOM por sus identificadores
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    // Inicializa una variable para llevar el total del pedido
    let total = 0;

    // Evita que el formulario se envíe de manera convencional (previene el comportamiento por defecto)
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Agrega un evento al botón "Agregar al pedido"
    document.getElementById("add-to-order").addEventListener("click", function () {
        // Obtiene los valores seleccionados y la cantidad de medicamentos y productos de aseo
        const medicine = document.getElementById("select-medicine").value;
        const medicineQuantity = parseInt(document.getElementById("medicine-quantity").value);
        const toiletry = document.getElementById("select-toiletry").value;
        const toiletryQuantity = parseInt(document.getElementById("toiletry-quantity").value);

        // Inicializa variables para los precios de medicamentos y productos de aseo
        let medicinePrice = 0;
        let toiletryPrice = 0;

        // Switch para asignar precios según el medicamento seleccionado
        switch (medicine) {
            case "Aspirina":
                medicinePrice = 2500;
                break;
            case "Ibuprofeno":
                medicinePrice = 4200;
                break;
            // ... casos para otros medicamentos
            default:
                medicinePrice = 0;
        }

        // Switch para asignar precios según el producto de aseo seleccionado
        switch (toiletry) {
            case "Pañales":
                toiletryPrice = 3500;
                break;
            case "Shampoo":
                toiletryPrice = 10000;
                break;
            // ... casos para otros productos de aseo
            default:
                toiletryPrice = 0;
        }

        // Calcula subtotales y el total del pedido
        const medicineSubtotal = medicinePrice * medicineQuantity;
        const toiletrySubtotal = toiletryPrice * toiletryQuantity;
        const subtotal = medicineSubtotal + toiletrySubtotal;

        // Crea un nuevo elemento de resumen de pedido y lo añade al DOM
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = ` ${medicine} (x${medicineQuantity}), ${toiletry} (x${toiletryQuantity})`;
        orderSummary.appendChild(orderItem);

        // Actualiza el total y lo muestra en el DOM
        total += subtotal;
        totalPrice.textContent = total.toFixed();

        // Puedes enviar la información del pedido a un servidor o procesarla de la manera deseada
        console.log("Pedido:", { medicine, medicineQuantity, toiletry, toiletryQuantity, subtotal });
    });
});
