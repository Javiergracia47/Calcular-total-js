let price= 30000
 
let cantidad = document.querySelector("#inputcantidad")
let color = document.querySelector("#inputcolor")

let button = document.querySelector("#buttontotal")

button.addEventListener("click" , () => {
document.querySelector("#total").innerHTML= cantidad.value * price
document.querySelector("#cantidadid").innerHTML= cantidad.value
document.querySelector("#colorusuario").style.backgroundColor= inputcolor.value;
}) 