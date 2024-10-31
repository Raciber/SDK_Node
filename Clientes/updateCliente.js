import { MercadoPagoConfig, Customer } from 'mercadopago';
import 'dotenv/config'

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER });
const customerClient = new Customer(client);

const body = {
	first_name: "APRO",
};

customerClient.update({ customerId:process.env.ID_CUSTOMER, body })
.then(console.log)
.catch(console.log);