interface PaymentStrategy {
  process(amount: number): void;
}

class CardPayment implements PaymentStrategy {
  private security = true;
  process(amount: number) {
    if (this.security) console.log('Verificando seguridad de tarjeta');
    console.log(`Pago con tarjeta: $${amount}`);
  }
}

class BankPayment implements PaymentStrategy {
    private security = true;

    processPayment(amount: number, data: { accountNumber: string; bankCode: string }): boolean {
        if (!data.accountNumber || !data.bankCode) {
            console.log('Datos bancarios incompletos.');
            return false;
        }
        if (this.security) {
            console.log('Verificando seguridad de transferencia bancaria');
        }
        console.log(`Procesando transferencia bancaria de $${amount} a la cuenta ${data.accountNumber} (${data.bankCode})`);
        this.security = false; // solo afecta a este flujo
        return true;
    }

    getDescription(): string {
        return 'Pago por transferencia bancaria';
    }

    process(amount: number) {
        console.log(`Pago por transferencia: $${amount}`);
        this.security = false; // solo afecta a este flujo
        console.log('Seguridad deshabilitada en BankPayment');
    }
}

class PaypalPayment implements PaymentStrategy {
  private security = true;
  process(amount: number) {
    if (this.security) console.log('Verificando seguridad de PayPal');
    console.log(`Pago con PayPal: $${amount}`);
  }
}

class CryptoPayment implements PaymentStrategy {
  private security = true;
  process(amount: number) {
    console.log(`Pago con criptomoneda: $${amount}`);
    this.security = true; // mantiene su propio estado
  }
}

class PaymentProcessorContext {
  constructor(private strategy: PaymentStrategy) {}
  process(amount: number) {
    this.strategy.process(amount);
  }
}

// Uso:
const bank = new PaymentProcessorContext(new BankPayment());
bank.process(100);

const card = new PaymentProcessorContext(new CardPayment());
card.process(50);

const paypal = new PaymentProcessorContext(new PaypalPayment());
paypal.process(75);

const cryptos = new PaymentProcessorContext(new CryptoPayment());
cryptos.process(20);
