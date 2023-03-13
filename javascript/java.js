/** function alquilar (numPersonas, numDias) {
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
}. */


//Segunda preEntrega a partir de acá
  
function alquilar(departamento, numDias) {
    const costoTotal = departamento.calcularCostoTotal(numDias);
    const mensaje = `El costo total de tu alojamiento es de $${costoTotal} para ${departamento.capacidad} personas durante ${numDias} días.`;
    alert(mensaje);
  }


// Objeto
class Departamento {
    constructor(nombre, numHabitaciones, capacidad, disponibilidad, precioNoche) {
      this.nombre = nombre;
      this.numHabitaciones = numHabitaciones;
      this.capacidad = capacidad;
      this.disponibilidad = disponibilidad;
      this.precioNoche = precioNoche;
    }

    calcularCostoTotal(numDias) {
        return this.precioNoche * this.capacidad * numDias;
    }
       
    verificarDisponibilidad(numDias) {
        return this.disponibilidad >= numDias;
    }
        
  }


  // Arrays - tres departamentos

  const Departamentos = [

    new Departamento('Lenga', 1, 3, 7, 15000),
    new Departamento('Guindo', 2, 5, 15, 35000),
    new Departamento('Ñire', 2, 5, 10, 35000)

  ];


  // Datos Usuario
  let nombreUsuario = prompt("Hola! Te invitamos a que nos visites, ¿Cuál es tu nombre?");


  let seleccionValida = false;
  let seleccionDepartamento = null;
  
  while (!seleccionValida) {
    const seleccion = prompt(
      `${nombreUsuario}, ¿En qué tipo de departamento quieres alojarte?\n1. Lenga (hasta 3 personas)\n2. Guindo (hasta 5 personas)\n3. Ñire (hasta 5 personas)`
    );
    switch (seleccion) {
      case "1":
        seleccionDepartamento = Departamentos[0];
        seleccionValida = true;
        break;
      case "2":
        seleccionDepartamento = Departamentos[1];
        seleccionValida = true;
        break;
      case "3":
        seleccionDepartamento = Departamentos[2];
        seleccionValida = true;
        break;
      default:
        alert("Selección no válida, por favor intenta de nuevo.");
        break;
    }
  }

let diasAlojamiento = null;

while (diasAlojamiento === null) {
    const dias = prompt("Perfecto. ¿Cuántos días te gustaría alojarte?");
    if (dias && parseInt(dias) > 0) {
      const disponibilidadSuficiente = seleccionDepartamento.verificarDisponibilidad(
        parseInt(dias)
      );
      if (disponibilidadSuficiente) {
        diasAlojamiento = parseInt(dias);
      } else {
        alert(
          `Lo siento, no hay suficiente disponibilidad para el departamento ${seleccionDepartamento.nombre} durante los días que has elegido.`
        );
      }
    } else {
      alert("Selección no válida, por favor intenta de nuevo.");
    }
  }
  
// Costo total y resultado 
alquilar(seleccionDepartamento, diasAlojamiento);


// Actualizar la disponibilidad del departamento seleccionado
seleccionDepartamento.disponibilidad -= diasAlojamiento;





  
