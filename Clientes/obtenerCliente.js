// SDK de Mercado Pago
import { MercadoPagoConfig, Customer } from 'mercadopago';
import 'dotenv/config'
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER });
const customerClient = new Customer(client);

customerClient.get({ customerId:process.env.ID_CUSTOMER })
.then(console.log)
.catch(console.log);