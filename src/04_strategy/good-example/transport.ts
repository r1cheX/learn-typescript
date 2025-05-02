// * Good Example


// * 1. Interfaz estrategia
interface TransportStrategy {
  goToAirport(): string;
}

// * 2. Estrategias concretas
class BusTransport implements TransportStrategy {
  goToAirport(): string {
    return "� Viajando al aeropuerto en autobús...";
  }
}

class TaxiTransport implements TransportStrategy {
  goToAirport(): string {
    return "� Viajando al aeropuerto en taxi...";
  }
}

class BicycleTransport implements TransportStrategy {
  goToAirport(): string {
    return "� Pedaleando hacia el aeropuerto...";
  }
}

// * Context
class TravelerContext {
  private name: string;
  private strategy: TransportStrategy; // Referencia 

  constructor(name: string, strategy: TransportStrategy) {
    this.name = name;
    this.strategy = strategy;
  }

  // * setter modificador - tiempo ejecución
  changeStrategy(newStrategy: TransportStrategy): void {
    this.strategy = newStrategy;
  }

  // * Delega el trabajo a un objeto estrategia 
  // * No conoce detalles internos
  goToAirport(): void {
    console.log(`${this.name} necesita ir al aeropuerto:`);
    console.log(`- ${this.strategy.goToAirport()}`);
  }
}


// * Client - elige estrategia concreta y pasa al contexto
function goodImplementationExampleTransport(): void {
  const bus = new BusTransport();
  const taxi = new TaxiTransport();
  const bicycle = new BicycleTransport();

  console.log("� SITUACIÓN: Ana tiene poco dinero pero mucho tiempo");
  const ana = new TravelerContext("Ana", bicycle);
  ana.goToAirport();

  console.log("� SITUACIÓN: Juan tiene poco tiempo y suficiente dinero");
  const juan = new TravelerContext("Juan", taxi);
  juan.goToAirport();

  console.log("⚖️ SITUACIÓN: María quiere un equilibrio entre tiempo y dinero");
  const maria = new TravelerContext("María", bus);
  maria.goToAirport();

  console.log(" CAMBIO DE PLANES: A Juan se le acaba el dinero 😱");
  juan.changeStrategy(bus);  // Cambia tiempo de ejecución
  juan.goToAirport();
}

goodImplementationExampleTransport();
