import express from 'express'
import * as pipedrive from 'pipedrive'
import { addDeals } from './controllers/blingProductController'
import { getNewDeals } from './controllers/dealController'

const routes = express.Router()

routes.get('/', addDeals)

export default routes