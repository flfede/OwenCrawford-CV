function button (){
    email = document.getElementById("email")
    mensaje = document.getElementById("mensaje")
    
    console.log("Email: " + email.value + " mensaje: " + mensaje.value)
    email.value = ""
    mensaje.value = ""
    document.getElementById("contact-button").innerHTML = "Enviado!"
}

document.getElementById("contact-button").addEventListener("click", button)