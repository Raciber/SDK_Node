import {Preference, MercadoPagoConfig} from 'mercadopago';
import 'dotenv/config'

const client = new MercadoPagoConfig({  accessToken: process.env.ACCESS_TOKEN_USER });
const preference = new Preference(client);

const body = {
  items: [
    {
      id: '1234',
      title: 'Dummy Title - League of Legends',
      description: 'Video juego League of Legends',
      picture_url: '',
      category_id: 'video_games',
      quantity: 1,
      currency_id: 'MXN',
      unit_price: 100,
    },
  ],
  marketplace_fee: 0,
  marketplace: 'NONE',
  back_urls: {
    success: 'https://test.com/success',
    failure: 'https://test.com/failure',
    pending: 'https://test.com/pending',
  },
  expires: false,
  auto_return: 'approved',
  binary_mode: false,
  external_reference: 'raciber-league-juego-001',
  notification_url: 'https://notificationurl.com',
  payment_methods: {
    excluded_payment_types: [
      {
      },
    ],
    excluded_payment_methods: [
      {
      },
    ],
    installments: 1
  },
  statement_descriptor: 'juegosRaciber',
};

preference.create({ body })
.then(console.log)
.catch(console.log);
