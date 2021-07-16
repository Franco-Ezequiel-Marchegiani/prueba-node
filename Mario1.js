console.log("Modifique este archivo");
function suma(a,b){
    return a+b;
}
let sumaDeDosNumeros = suma(50,75);
console.log(sumaDeDosNumeros);

let fechaActual = new Date ();

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero","Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log ("Hoy es el " + dia + " de " + meses[mes] + " de " + anio );
