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

/** 
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
      const disponibilidadSuficiente = seleccionDepartamento.verificarDisponibilidad(parseInt(dias));
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
*/







/*


//Tercera entrega a partir de acá

    // Objeto
    class Departamento {
        constructor(nombre, numHabitaciones, capacidad, disponibilidad, precioNoche) {
          this.nombre = nombre;
          this.numHabitaciones = numHabitaciones;
          this.capacidad = capacidad;
          this.disponibilidad = disponibilidad;
          this.precioNoche = precioNoche;
        }
  
        calcularCostoTotal(numPersonas, numDias) {
          return this.precioNoche * numPersonas * numDias;
        }
  
        verificarDisponibilidad(numPersonas, numDias) {
          return this.disponibilidad >= numDias && this.capacidad >= numPersonas;
        }
      }
  
      // Arrays - un departamento de cada uno
      const departamentos = [
        new Departamento("Lenga", 1, 3, 7, 15000),
        new Departamento("Guindo", 2, 5, 15, 35000),
        new Departamento("Ñire", 2, 5, 10, 35000),
      ];
  
      function calcularCosto() {
        const departamentoSeleccionado = document.getElementById("departamento").value;
        const numPersonas = parseInt(document.getElementById("personas").value);
        const numDias = parseInt(document.getElementById("dias").value);
  
        // Buscar el departamento seleccionado en el array
        const departamento = departamentos.find((d) => d.nombre === departamentoSeleccionado);
  
        if (departamento) {
          const costoTotal = departamento.calcularCostoTotal(numPersonas, numDias);
          const disponibilidadSuficiente = departamento.verificarDisponibilidad(numPersonas, numDias);
  
          let mensaje = "";
  
          if (disponibilidadSuficiente) {
            mensaje = `El costo total de tu alojamiento es de $${costoTotal} para ${numPersonas} personas durante ${numDias} días.`;
            departamento.disponibilidad -= numDias;
          } else {
      mensaje = `Lo siento, no hay suficiente disponibilidad para el departamento ${departamento.nombre} durante los días y la cantidad de personas que has seleccionado.`;
    }

    // Actualizar la disponibilidad
    const disponibilidadElement = document.getElementById("disponibilidad");
if (disponibilidadElement) {
  disponibilidadElement.textContent = departamento.disponibilidad;
}
    // Mostrar el mensaje 
    document.getElementById("mensaje").textContent = mensaje;
  }
}

// Agregar un evento al botón de calcular
botonCalcular.addEventListener("click", calcularCosto);
*/

// elementos 
const botonCalcular = document.getElementById("calcular");
const selectDepartamento = document.getElementById("departamento");



// Evento onmouseover - Obtener todos los elementos de la lista del menú
const menuItems = document.querySelectorAll('.nav-item');



//ENTREGA FINAL

// Evento onmouseover
menuItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#006400';
    item.style.color = '#ffffff';
  });
});

// onmouseout
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(navItem => {
  navItem.addEventListener('mouseover', () => {
    navItem.style.backgroundColor = '#006633';
    navItem.style.color = '#ffffff';
  });
  navItem.addEventListener('mouseout', () => {
    navItem.style.backgroundColor = '';
    navItem.style.color = '';
  });
});


//JSON FETCH

const departamentos = document.getElementById('departamentos');

fetch('./JS/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            const img = document.createElement('img');
            img.src = item.fotos[0];
            img.alt = item.titulo;
            
            const title = document.createElement('h3');
            title.textContent = item.titulo;
            
            const price = document.createElement('p');
            price.textContent = `Precio: ${item.precio} ARG`;
            
            const capacity = document.createElement('p');
            capacity.textContent = `Capacidad: ${item.capacidad}`;
            
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(capacity);
            
            departamentos.appendChild(card);
        });
    });



// Calendario con librería

const DateTime = luxon.DateTime;
const ahora = DateTime.now();


const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');

// Obtener la fecha actual
const fechaActual = new Date(Date.now());
const fechaActualLegible = fechaActual.toISOString().split('T')[0];

// Establecer fecha de ingreso y egreso
checkIn.setAttribute('min', fechaActualLegible);
checkIn.addEventListener('change', () => {
  const fechaIngreso = new Date(checkIn.value);
  const fechaEgresoMin = new Date(fechaIngreso.getTime() + 86400000);
  const fechaEgresoMinLegible = fechaEgresoMin.toISOString().split('T')[0];
  checkOut.setAttribute('min', fechaEgresoMinLegible);
});

const precios = {
  lenga: 15000,
  nire: 27000,
  guindo: 25000
};

// Calcular precio

function calcularPrecio() {
  const inputsFecha = [
    document.getElementById('checkIn').value,
    document.getElementById('checkOut').value
  ];

  const checkIn = DateTime.fromISO(inputsFecha[0]);
  const checkOut = DateTime.fromISO(inputsFecha[1]);
  const estadia = calcularEstadia(checkIn, checkOut);
  const departamento = document.querySelector('input[name="departamento"]:checked').value;
  const precioTotal = calcularPrecioTotal(estadia, departamento);

  btnSwal.onclick = () =>{
      Swal.fire({
        title: 'Quieres reservar?',
        text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Cancelado!',
            'No has reservado.',
            'Felicitaciones, has reservado'
          )
        }
      })
    }
}