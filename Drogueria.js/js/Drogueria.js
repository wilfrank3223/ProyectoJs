document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    let total = 0;

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.getElementById("add-to-order").addEventListener("click", function () {
        // Medicamentos
        const medicine = document.getElementById("select-medicine").value;
        const medicineQuantity = parseInt(document.getElementById("medicine-quantity").value);

        // Productos de Aseo
        const toiletry = document.getElementById("select-toiletry").value;
        const toiletryQuantity = parseInt(document.getElementById("toiletry-quantity").value);

        let medicinePrice = 0;
        let toiletryPrice = 0;

        // Switch para medicamentos
        switch (medicine) {
            case "Aspirina":
                medicinePrice = 2500;
                break;
            case "Ibuprofeno":
                medicinePrice = 4200;
                break;
            case "Vitaminas":
                medicinePrice = 15000;
                break;
            case "Acetaminofen":
                medicinePrice = 2500;
                break;
            case "Dextroamfetamina":
                medicinePrice = 3000;
                break;
            case "Diclofenaco":
                medicinePrice = 2000;
                break;
            default:
                medicinePrice = 0;
        }

        // Switch para productos de aseo
        switch (toiletry) {
            case "Pañales":
                toiletryPrice = 3500;
                break;
            case "Shampoo":
                toiletryPrice = 10000;
                break;
            case "Desodorante":
                toiletryPrice = 7800;
                break;
            case "Crema hidratante":
                toiletryPrice = 9600;
                break;
            default:
                toiletryPrice = 0;
        }

        const medicineSubtotal = medicinePrice * medicineQuantity;
        const toiletrySubtotal = toiletryPrice * toiletryQuantity;

        const subtotal = medicineSubtotal + toiletrySubtotal;

        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = ` ${medicine} (x${medicineQuantity}), ${toiletry} (x${toiletryQuantity})`;

        orderSummary.appendChild(orderItem);

        total += subtotal;
        totalPrice.textContent = total.toFixed();

        // Aquí puedes enviar la información del pedido a tu servidor o procesarla de la manera que desees.
        console.log("Pedido:", { medicine, medicineQuantity, toiletry, toiletryQuantity, subtotal });
    });
});