import express from 'express'
import * as pipedrive from 'pipedrive'
import { getNewDeals } from './controllers/dealController'

const routes = express.Router()


routes.get('/', getNewDeals)

export default routes