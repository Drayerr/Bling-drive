import express from 'express'
import { addDeals } from './controllers/blingProductController'
import forcePostMongo from './controllers/mongoProductsController'

const routes = express.Router()

routes.get('/', addDeals)
routes.post('/mongo', forcePostMongo)

export default routes
