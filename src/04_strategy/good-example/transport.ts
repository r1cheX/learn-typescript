// * Good Example

interface TransportStrategy {
  goToAirport(): string;
}

class TransporteAutobus implements TransportStrategy {
  goToAirport(): string {
    return "🚌 Viajando al aeropuerto en autobús...";
  }
}

class TransporteTaxi implements TransportStrategy {
  goToAirport(): string {
    return "🚕 Viajando al aeropuerto en taxi...";
  }
}

class TransporteBicicleta implements TransportStrategy {
  goToAirport(): string {
    return "🚲 Pedaleando hacia el aeropuerto...";
  }
}

class ViajeroContext {
  private nombre: string;
  private estrategia: TransportStrategy;

  constructor(nombre: string, estrategia: TransportStrategy) {
    this.nombre = nombre;
    this.estrategia = estrategia;
  }

  cambiarEstrategia(nuevaEstrategia: TransportStrategy): void {
    this.estrategia = nuevaEstrategia;
  }

  goToAirport(): void {
    console.log(`${this.nombre} necesita ir al aeropuerto:`);
    console.log(`- ${this.estrategia.goToAirport()}`);
  }
}

function ejemploTransporteAeropuerto(): void {
  const autobus = new TransporteAutobus();
  const taxi = new TransporteTaxi();
  const bicicleta = new TransporteBicicleta();

  console.log("🕒 SITUACIÓN: Ana tiene poco dinero pero mucho tiempo");
  const ana = new ViajeroContext("Ana", bicicleta);
  ana.goToAirport();

  console.log("💰 SITUACIÓN: Juan tiene poco tiempo y suficiente dinero");
  const juan = new ViajeroContext("Juan", taxi);
  juan.goToAirport();

  console.log("⚖️ SITUACIÓN: María quiere un equilibrio entre tiempo y dinero");
  const maria = new ViajeroContext("María", autobus);
  maria.goToAirport();

  console.log("😱 CAMBIO DE PLANES: A Juan se le acaba el dinero");
  juan.cambiarEstrategia(autobus);
  juan.goToAirport();
}

ejemploTransporteAeropuerto();