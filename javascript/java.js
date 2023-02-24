function alquilar (numPersonas, numDias) {
    const costoNoche = numPersonas <= 3 ? 15000 : 35000;
    const costoTotal = costoNoche * numDias;
    return costoTotal
}


let nombreUsuario = prompt ("Hola! Te invitamos a que nos visites, ¿Cuál es tu nombre?");
let numPersonas = prompt (nombreUsuario + " ,¿En qué tipo de departamento quieres alojarte?\n1. Hasta 3 personas\n2. Hasta 5 personas");

let maxPersonas; 
if (numPersonas === "1") {
    maxPersonas = 3;
} else if (numPersonas ==="2") {
    maxPersonas = 5;
} else {
    alert ("Lo siento, debe haber ocurrido un error. Por favor, intenta nuevamente");
}

let numDias = prompt("Perfecto. ¿Cuántos días te gustaría alojarte?");
if (numDias <= 0) {
    alert ("Lo siento, debe haber ocurrido un error. Por favor, intenta nuevamente");
} else {
    let costoTotal = alquilar (maxPersonas, numDias);
    alert ("El costo total de tu alojamiento es de $ " + costoTotal + " para " + maxPersonas + " personas durante " + numDias + " días.")
}


