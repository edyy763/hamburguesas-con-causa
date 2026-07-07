let precio = 100;

let productoSeleccionado = "Combo Hamburguesa + Refresco";

let cantidad = 1;


const cantidadSpan = document.getElementById("cantidad");

const totalSpan = document.getElementById("total");



document.getElementById("mas").onclick = () => {

    cantidad++;

    actualizar();

}



document.getElementById("menos").onclick = () => {

    if(cantidad > 1){

        cantidad--;

        actualizar();

    }

}



function cambiarProducto(opcion){

    precio = Number(opcion.value);

    productoSeleccionado = opcion.dataset.nombre;

    document.getElementById("producto").innerHTML = productoSeleccionado;

    document.getElementById("precio").innerHTML = "$" + precio + " MXN";


    actualizar();

}



function actualizar(){

    cantidadSpan.innerHTML = cantidad;

    totalSpan.innerHTML = "$" + (cantidad * precio);

}



function enviarWhatsapp(){


    let nombre = document.getElementById("nombre").value;

    let comentarios = document.getElementById("comentarios").value;


    if(nombre==""){

        alert("Escribe tu nombre.");

        return;

    }


    let total = cantidad * precio;


    let telefono = "526562757854";


    let mensaje =
`🍔 *NUEVO PEDIDO*%0A%0A
👤 *Nombre:* ${nombre}%0A
🍔 *Producto:* ${productoSeleccionado}%0A
🔢 *Cantidad:* ${cantidad}%0A
💲 *Total:* $${total}%0A%0A
📝 *Comentarios:*%0A${comentarios}`;


    window.open(
        `https://wa.me/${telefono}?text=${mensaje}`
    );

}
