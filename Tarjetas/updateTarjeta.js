// SDK de Mercado Pago
import { MercadoPagoConfig, CustomerCard } from 'mercadopago';
import 'dotenv/config'
// Agrega credenciales                               
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER });
//const client=0;
const customerCard = new CustomerCard(client);

const body = {
	cardholder: {
        name: 'APRO'
    }
};

customerCard.update({ customerId: process.env.ID_CUSTOMER, cardId: process.env.CARD_ID, body })
.then(console.log)
.catch(console.log);