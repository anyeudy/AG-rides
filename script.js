function calcular(){

let millas = Number(document.getElementById("millas").value);
let tiempo = Number(document.getElementById("tiempo").value);
let peajes = Number(document.getElementById("peajes").value);

let total = (millas * 3) + (tiempo * 0.5) + peajes;

document.getElementById("resultado").innerHTML =
"Precio estimado: $" + total.toFixed(2);

}
