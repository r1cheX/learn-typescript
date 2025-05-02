// ! BAD EXAMPLE

enum TransportType {
  BUS = 'autobus',
  TAXI = 'taxi',
  BICYCLE = 'bicicleta',
}

class Traveler {
  name: string;
  transportType: TransportType; // Fuerte acoplamiento

  constructor(name: string, transportType: TransportType) {
    this.name = name;
    this.transportType = transportType;
  }

  travelToAirport(): void {
    console.log(`${this.name} necesita ir al aeropuerto:`);
    
    if (this.transportType === TransportType.BUS) {
      console.log("- � Viajando al aeropuerto en autobús...");
    } else if (this.transportType === TransportType.TAXI) {
      console.log("- � Viajando al aeropuerto en taxi...");
    } else if (this.transportType === TransportType.BICYCLE) {
      console.log("- � Pedaleando hacia el aeropuerto...");
    } 
    // ... Violando principio O/C 
  }
}

function badImplementationExampleTransport(): void {
  console.log("⛔ EJEMPLO MAL IMPLEMENTADO �");
  
  console.log("� SITUACIÓN: Ana tiene poco dinero pero mucho tiempo");
  const ana = new Traveler("Ana", TransportType.BICYCLE);
  ana.travelToAirport();

  console.log("� SITUACIÓN: Juan tiene poco tiempo y suficiente dinero");
  const juan = new Traveler("Juan", TransportType.TAXI);
  juan.travelToAirport();

  console.log("� CAMBIO DE PLANES: A Juan se le acaba el dinero");
  juan.transportType = TransportType.BUS;
  juan.travelToAirport();
}

badImplementationExampleTransport();