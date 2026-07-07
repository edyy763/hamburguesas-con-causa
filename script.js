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

    if(cantidad100 > 0){

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

    if(cantidad85 > 0){

        cantidad85--;

        actualizar();

    }

}



// Actualizar cantidades y total

function actualizar(){

    cantidad100Span.innerHTML = cantidad100;

    cantidad85Span.innerHTML = cantidad85;


    let total = 
        (cantidad100 * 100) + 
        (cantidad85 * 85);


    totalSpan.innerHTML = "$" + total;

}



// Enviar pedido por WhatsApp

function enviarWhatsapp(){


    let nombre = document.getElementById("nombre").value;

    let comentarios = document.getElementById("comentarios").value;


    if(nombre.trim() == ""){

        alert("Escribe tu nombre.");

        return;

    }


    let total = 
        (cantidad100 * 100) + 
        (cantidad85 * 85);



    if(total == 0){

        alert("Selecciona al menos un producto.");

        return;

    }



    let telefono = "526562757854"; // Cambia por tu número



    let mensaje =
`🍔 *NUEVO PEDIDO*

👤 *Nombre:* ${nombre}

🍔 *Combo Hamburguesa + Refresco:* ${cantidad100}

🍔 *Hamburguesa sin soda:* ${cantidad85}

💲 *Total:* $${total}

📝 *Comentarios:*
${comentarios}`;



    window.open(

        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

    );

}
