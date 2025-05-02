// * COMBINED STRATEGY AND FACTORY PATTERN EXAMPLE

// Define payment types enum
enum PaymentTypeEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
  BANK_TRANSFER = 'BANK_TRANSFER',
}

// Strategy Interface - defines the contract for all payment strategies
interface PaymentStrategy {
  processPayment(amount: number, data: any): boolean;
  getDescription(): string;
}

// Concrete Strategy implementations
class CreditCardStrategy implements PaymentStrategy {
  processPayment(amount: number, data: any): boolean {
    console.log(`Processing $${amount} via Credit Card (${data.cardNumber})`);
    return true;
  }

  getDescription(): string {
    return "Credit Card Payment (2% fee)";
  }
}

class PayPalStrategy implements PaymentStrategy {
  processPayment(amount: number, data: any): boolean {
    console.log(`Processing $${amount} via PayPal (${data.email})`);
    return true;
  }

  getDescription(): string {
    return "PayPal Payment (1.5% fee)";
  }
}

class BankTransferStrategy implements PaymentStrategy {
  processPayment(amount: number, data: any): boolean {
    console.log(`Processing $${amount} via Bank Transfer (${data.accountNumber})`);
    return true;
  }

  getDescription(): string {
    return "Bank Transfer ($5 fee)";
  }
}

// Strategy Factory - creates and returns the appropriate payment strategy
class PaymentStrategyFactory {
  getStrategy(paymentType: PaymentTypeEnum): PaymentStrategy {
    switch (paymentType) {
      case PaymentTypeEnum.CREDIT_CARD:
        return new CreditCardStrategy();
      case PaymentTypeEnum.PAYPAL:
        return new PayPalStrategy();
      case PaymentTypeEnum.BANK_TRANSFER:
        return new BankTransferStrategy();
      default:
        throw new Error('Payment type not supported');
    }
  }
}

// Client class that uses the factory and strategy
class Checkout {
  private paymentStrategy: PaymentStrategy | null = null;
  
  constructor(private paymentStrategyFactory: PaymentStrategyFactory) {}

  // Set payment strategy based on selected payment type
  setPaymentMethod(paymentType: PaymentTypeEnum): void {
    this.paymentStrategy = this.paymentStrategyFactory.getStrategy(paymentType);
    console.log(`Payment method set to: ${this.paymentStrategy.getDescription()}`);
  }

  // Process payment using the selected strategy
  pay(amount: number, paymentData: any): void {
    if (!this.paymentStrategy) {
      console.error('Payment method not selected!');
      return;
    }
    
    const success = this.paymentStrategy.processPayment(amount, paymentData);
    if (success) {
      console.log('Payment processed successfully!');
    } else {
      console.log('Payment failed!');
    }
  }
}

// Example usage
function runExample(): void {
  console.log('✅ COMBINED STRATEGY AND FACTORY PATTERN EXAMPLE');
  
  const factory = new PaymentStrategyFactory();
  const checkout = new Checkout(factory);
  
  console.log('\n💡 SCENARIO: Credit Card payment');
  checkout.setPaymentMethod(PaymentTypeEnum.CREDIT_CARD);
  checkout.pay(100, { cardNumber: '4111-1111-1111-1111' });
  
  console.log('\n💡 SCENARIO: PayPal payment');
  checkout.setPaymentMethod(PaymentTypeEnum.PAYPAL);
  checkout.pay(100, { email: 'customer@example.com' });
  
  console.log('\n💡 SCENARIO: Bank Transfer');
  checkout.setPaymentMethod(PaymentTypeEnum.BANK_TRANSFER);
  checkout.pay(100, { accountNumber: '123456789' });
}

runExample();