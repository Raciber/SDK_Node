import {Payment, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACCESS_TOKEN_USER
});
const payment = new Payment(client);

payment.get({ id:process.env.ID_DE_PAGO })
.then(console.log)
.catch(console.log);