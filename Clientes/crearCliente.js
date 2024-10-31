// SDK de Mercado Pago
import { MercadoPagoConfig, Customer } from 'mercadopago';
import 'dotenv/config'

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER });
const customerClient = new Customer(client);
console.log(customerClient);

const body = {
	email: process.env.EMAIL_PAYER,
	first_name: "APRO",
	last_name: "APRO",
};

customerClient.create({ body: body }).then(console.log).catch(console.log);