// ! BAD EXAMPLE

class Electronics {
  private name: string;
  private price: number;
  private warranty: number; // in months
  private type: string;

  constructor(name: string, price: number, warranty: number, type: string) {
    this.name = name;
    this.price = price;
    this.warranty = warranty;
    this.type = type;
  }

  getInfo(): void {
    if (this.type === 'smartphone') {
      console.log(`📱 Smartphone: ${this.name}`);
      console.log(`- Price: $${this.price}`);
      console.log(`- Warranty: ${this.warranty} months`);
      console.log(`- Free phone case included`);
    } else if (this.type === 'laptop') {
      console.log(`💻 Laptop: ${this.name}`);
      console.log(`- Price: $${this.price}`);
      console.log(`- Warranty: ${this.warranty} months`);
      console.log(`- Free laptop bag included`);
    } else if (this.type === 'tablet') {
      console.log(`📱 Tablet: ${this.name}`);
      console.log(`- Price: $${this.price}`);
      console.log(`- Warranty: ${this.warranty} months`);
      console.log(`- Free screen protector included`);
    }
  }
}

function createElectronicDevice(type: string, name: string, price: number): Electronics {
  let warranty = 0;
  
  if (type === 'smartphone') {
    warranty = 12;
  } else if (type === 'laptop') {
    warranty = 24;
  } else if (type === 'tablet') {
    warranty = 18;
  }
  
  return new Electronics(name, price, warranty, type);
}

function badImplementationExampleElectronic(): void {
  console.log("⛔ EJEMPLO MAL IMPLEMENTADO ⛔");
  
  const smartphone = createElectronicDevice('smartphone', 'iPhone 15', 999);
  smartphone.getInfo();
  
  const laptop = createElectronicDevice('laptop', 'MacBook Pro', 1999);
  laptop.getInfo();
  
  const tablet = createElectronicDevice('tablet', 'iPad Pro', 799);
  tablet.getInfo();
  
  // Problems with this approach:
  // 1. If we need to add a new device type, we need to modify both 
  //    createElectronicDevice and Electronics.getInfo methods
  // 2. The Electronics class has too many responsibilities
  // 3. We're using string literals for device types, which is error-prone
  // 4. Violates the Open/Closed Principle - code should be open for extension, closed for modification
}

badImplementationExampleElectronic();