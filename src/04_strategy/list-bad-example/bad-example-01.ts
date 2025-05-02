
class PaymentProcessor {
  private security = true;

  process(amount: number, type: 'card' | 'bank' | 'paypal' | 'crypto') {
    if (type === 'card') {
      if (this.security){
          console.log(`Pago con tarjeta: $${amount}`);
      } 
      console.log('Verificando seguridad de tarjeta');
    } else if (type === 'bank') {
      console.log(`Pago por transferencia: $${amount}`);
      this.security = false; // rompe seguridad para futuros pagos
    } else if (type === 'paypal') {
      if (this.security) {
            console.log('Verificando seguridad de PayPal');
        }
      console.log(`Pago con PayPal: $${amount}`);
    } else if (type === 'crypto') {
      console.log(`Pago con criptomoneda: $${amount}`);
      this.security = true; // re-habilita seguridad inesperadamente
    }
  }
}

const p = new PaymentProcessor();
p.process(100, 'bank');   // ! deshabilita security
p.process( 50, 'card');   // ! ¡ya no verifica seguridad!