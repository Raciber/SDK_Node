import {Payment, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACCESS_TOKEN_USER
});
const payment = new Payment(client);

const queryParams = {
	    sort: 'date_created',
	    criteria: 'desc',
	    range: 'date_created',
	    begin_date: 'NOW-30DAYS',
	    end_date: 'NOW',
	    offset: 0,
	    limit: 30
};

payment.search({ queryParams })
.then(console.log)
.catch(console.log);