// * GOOD EXAMPLE

// Base interface for all electronic products
interface ElectronicProduct {
  getName(): string;
  getPrice(): number;
  getWarranty(): number;
  getInfo(): void;
}

// Concrete implementations
class Smartphone implements ElectronicProduct {
  private name: string;
  private price: number;
  private warranty: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.warranty = 12; // 12 months warranty for smartphones
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getWarranty(): number {
    return this.warranty;
  }

  getInfo(): void {
    console.log(`📱 Smartphone: ${this.name}`);
    console.log(`- Price: $${this.price}`);
    console.log(`- Warranty: ${this.warranty} months`);
    console.log(`- Free phone case included`);
  }
}

class Laptop implements ElectronicProduct {
  private name: string;
  private price: number;
  private warranty: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.warranty = 24; // 24 months warranty for laptops
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getWarranty(): number {
    return this.warranty;
  }

  getInfo(): void {
    console.log(`💻 Laptop: ${this.name}`);
    console.log(`- Price: $${this.price}`);
    console.log(`- Warranty: ${this.warranty} months`);
    console.log(`- Free laptop bag included`);
  }
}

class Tablet implements ElectronicProduct {
  private name: string;
  private price: number;
  private warranty: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.warranty = 18; // 18 months warranty for tablets
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getWarranty(): number {
    return this.warranty;
  }

  getInfo(): void {
    console.log(`📱 Tablet: ${this.name}`);
    console.log(`- Price: $${this.price}`);
    console.log(`- Warranty: ${this.warranty} months`);
    console.log(`- Free screen protector included`);
  }
}

// Factory class for creating electronic products
class ElectronicProductFactory {
  createSmartphone(name: string, price: number): ElectronicProduct {
    return new Smartphone(name, price);
  }

  createLaptop(name: string, price: number): ElectronicProduct {
    return new Laptop(name, price);
  }

  createTablet(name: string, price: number): ElectronicProduct {
    return new Tablet(name, price);
  }
}

function goodImplementationExampleElectronic(): void {
  console.log("✅ EJEMPLO BIEN IMPLEMENTADO ✅");
  
  const factory = new ElectronicProductFactory();
  
  console.log("💡 SITUACIÓN: Comprando un smartphone de alta gama");
  const smartphone = factory.createSmartphone("iPhone 15", 999);
  smartphone.getInfo();
  
  console.log("💡 SITUACIÓN: Comprando una laptop para trabajo profesional");
  const laptop = factory.createLaptop("MacBook Pro", 1999);
  laptop.getInfo();
  
  console.log("💡 SITUACIÓN: Comprando una tablet para uso familiar");
  const tablet = factory.createTablet("iPad Pro", 799);
  tablet.getInfo();
  
  // Benefits of this approach:
  // 1. New product types can be added without modifying existing code (Open/Closed Principle)
  // 2. Each product class has a single responsibility
  // 3. Factory encapsulates object creation logic
  // 4. Type safety is ensured through interfaces
  // 5. Easy to extend with new product types
}

goodImplementationExampleElectronic();