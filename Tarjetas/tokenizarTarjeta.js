import {CardToken, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_USER});
const token = new CardToken(client);

//TOKENIZAR SIN IDENTIFICACION
token.create({ body: {
    card_number: process.env.CARD_PAYER,
	expiration_month: process.env.MONTH_EXPIRATION, 
	expiration_year: process.env.YEAR_EXPIRATION, 
	security_code: process.env.CVV,
    cardholder: {
        name: 'APRO'
      }
}  
})
.then(console.log)
.catch(console.log);

//TOKENIZAR CON IDENTIFICACIÓN

/*token.create({ body: {
    card_number: process.env.CARD_PAYER,
	expiration_month: process.env.MONTH_EXPIRATION, 
	expiration_year: process.env.YEAR_EXPIRATION, 
	security_code: process.env.CVV,
    cardholder: {
        name: 'APRO',
        identification: { number: '12678', type: 'otro' }
      }
}  
})
.then(console.log)
.catch(console.log);*/
