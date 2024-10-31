import {PaymentRefund, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER});
const paymentRefund = new PaymentRefund(client);

const body = {
    amount: 300
}

paymentRefund.create({ payment_id: '89662627102', body })
.then(console.log)
.catch(console.log);