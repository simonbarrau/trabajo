let nombre= prompt(" Si quiere seguir navegando introduzca su nombre");
let apellido=prompt("Apellido");
let dni=prompt("y DNI");
let choose= parseInt(prompt("ingrese su edad"))

let resultado= "Hola"+ " " + nombre + " " + apellido + " " + "Bienvenido!";
let resuldni= "Toque donde dice aceptar si este es su nro de DNI:" + " " + dni 


if(choose >= 18){
    alert(resultado + resuldni);
} else{
    alert("Lo sentimos, su edad no es suficiente para ingresar a esta pagina")
}