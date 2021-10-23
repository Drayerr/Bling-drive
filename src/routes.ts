import express from 'express'
import { addDeals } from './controllers/blingProductController'

const routes = express.Router()

routes.get('/', addDeals)

export default routes
