import {Payment, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACCESS_TOKEN_USER
});
const payment = new Payment(client);

const requestOptions = {
	idempotencyKey: process.env.IDEMPOTENCIA,
};

const captura = {
    transaction_amount: 299,
    capture: "false"
}

payment.capture({ id:process.env.ID_DE_PAGO, captura, requestOptions })
.then(console.log)
.catch(console.log);