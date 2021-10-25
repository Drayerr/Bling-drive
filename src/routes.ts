import express from 'express'
import { addDeals } from './controllers/blingProductController'
import forcePostMongo from './controllers/mongoProductsController'

const routes = express.Router()

// Rota para sincronizar dados com o Bling
routes.get('/', addDeals)
routes.post('/products', forcePostMongo)

export default routes
