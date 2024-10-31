import {Payment, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACCESS_TOKEN_USER, 
    options: {idempotencyKey:"abc"}
});
const payment = new Payment(client);

const body = {
	transaction_amount: Number(process.env.MONTO_TRANSACCION),
	description: 'Refresco Pepsi de edición limitada',
	payment_method_id: process.env.PAYMENT_METHOD_ID,
	payer: {
		email: process.env.EMAIL_PAYER
	},
    token: process.env.CARD_TOKEN,
    installments: 1
};

const requestOptions = {
	idempotencyKey: process.env.IDEMPOTENCIA,
};


payment.create({ body, requestOptions })
.then(console.log)
.catch(console.log);