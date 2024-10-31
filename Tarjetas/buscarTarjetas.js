// SDK de Mercado Pago
import { MercadoPagoConfig, CustomerCard } from 'mercadopago';
import 'dotenv/config'
// Agrega credenciales                               
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER });

const customerCard = new CustomerCard(client);

customerCard.list({ customerId: process.env.ID_CUSTOMER })
.then(console.log)
.catch(console.log);