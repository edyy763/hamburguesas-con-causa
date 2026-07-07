const precio = 100;

let cantidad = 1;

const cantidadSpan = document.getElementById("cantidad");

const totalSpan = document.getElementById("total");

document.getElementById("mas").onclick = () => {

    cantidad++;

    actualizar();

}

document.getElementById("menos").onclick = () => {

    if(cantidad>1){

        cantidad--;

        actualizar();

    }

}

function actualizar(){

    cantidadSpan.innerHTML = cantidad;

    totalSpan.innerHTML="$"+(cantidad*precio);

}

function enviarWhatsapp(){

    let nombre=document.getElementById("nombre").value;

    let comentarios=document.getElementById("comentarios").value;

    if(nombre==""){

        alert("Escribe tu nombre.");

        return;

    }

    let total=cantidad*precio;

    let telefono="526562757854"; // Cambia por tu número

    let mensaje=
`🍔 *NUEVO PEDIDO*%0A%0A
👤 *Nombre:* ${nombre}%0A
🍔 *Combos:* ${cantidad}%0A
💲 *Total:* $${total}%0A%0A
📝 *Comentarios:*%0A${comentarios}`;

    window.open(

`https://wa.me/${telefono}?text=${mensaje}`

);

}
