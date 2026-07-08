let cantidad100 = 0;
let cantidad85 = 0;

const cantidad100Span = document.getElementById("cantidad100");
const cantidad85Span = document.getElementById("cantidad85");
const totalSpan = document.getElementById("total");

// ===== COMBO HAMBURGUESA + REFRESCO $100 =====

document.getElementById("mas100").onclick = () => {

    cantidad100++;

    actualizar();

}

document.getElementById("menos100").onclick = () => {

    if (cantidad100 > 0) {

        cantidad100--;

        actualizar();

    }

}


// ===== HAMBURGUESA SIN SODA $85 =====

document.getElementById("mas85").onclick = () => {

    cantidad85++;

    actualizar();

}

document.getElementById("menos85").onclick = () => {

    if (cantidad85 > 0) {

        cantidad85--;

        actualizar();

    }

}


// ===== ACTUALIZAR =====

function actualizar() {

    cantidad100Span.innerHTML = cantidad100;

    cantidad85Span.innerHTML = cantidad85;

    let total =
        (cantidad100 * 100) +
        (cantidad85 * 85);

    totalSpan.innerHTML = "$" + total;

}


// ===== ENVIAR PEDIDO =====

function enviarWhatsapp() {

    let nombre = document.getElementById("nombre").value.trim();

    let horario = document.getElementById("horario").value;

    let comentarios = document.getElementById("comentarios").value.trim();


    if (nombre === "") {

        alert("Escribe tu nombre.");

        return;

    }


    if (horario === "") {

        alert("Selecciona un horario para recoger.");

        return;

    }


    let total =
        (cantidad100 * 100) +
        (cantidad85 * 85);


    if (total === 0) {

        alert("Selecciona al menos un producto.");

        return;

    }


    let telefono = "526566458304"; // Tu número de WhatsApp


    let productos = "";

    if (cantidad100 > 0) {
        productos += `🍔 Combo Hamburguesa + Refresco x${cantidad100}\n`;
    }

    if (cantidad85 > 0) {
        productos += `🍔 Hamburguesa sin soda x${cantidad85}\n`;
    }


    let mensaje =
`🍔 *NUEVO PEDIDO*

👤 *Nombre:* ${nombre}

🛒 *Pedido:*
${productos}
🕐 *Horario para recoger:* ${horario}

💲 *Total:* $${total}

📝 *Comentarios:*
${comentarios || "Sin comentarios."}`;


    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
    );

}
