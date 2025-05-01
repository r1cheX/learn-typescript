// ! BAD EXAMPLE

enum TipoTransporte {
  AUTOBUS = 'autobus',
  TAXI = 'taxi',
  BICICLETA = 'bicicleta'
}

class Viajero {
  nombre: string;
  tipoTransporte: TipoTransporte;

  constructor(nombre: string, tipoTransporte: TipoTransporte) {
    this.nombre = nombre;
    this.tipoTransporte = tipoTransporte;
  }

  travelToAirport(): void {
    console.log(`${this.nombre} necesita ir al aeropuerto:`);
    
    if (this.tipoTransporte === TipoTransporte.AUTOBUS) {
      console.log("- � Viajando al aeropuerto en autobús...");
    } else if (this.tipoTransporte === TipoTransporte.TAXI) {
      console.log("- � Viajando al aeropuerto en taxi...");
    } else if (this.tipoTransporte === TipoTransporte.BICICLETA) {
      console.log("- � Pedaleando hacia el aeropuerto...");
    }
  }
}

function ejemploMalImplementado(): void {
  console.log("� EJEMPLO MAL IMPLEMENTADO 🙈");
  
  console.log("� SITUACIÓN: Ana tiene poco dinero pero mucho tiempo");
  const ana = new Viajero("Ana", TipoTransporte.BICICLETA);
  ana.travelToAirport();

  console.log("� SITUACIÓN: Juan tiene poco tiempo y suficiente dinero");
  const juan = new Viajero("Juan", TipoTransporte.TAXI);
  juan.travelToAirport();

  console.log("� CAMBIO DE PLANES: A Juan se le acaba el dinero");
  juan.tipoTransporte = TipoTransporte.AUTOBUS;
  juan.travelToAirport();
}

ejemploMalImplementado();