import express from 'express'
const pipedrive = require('pipedrive')

const routes = express.Router()

routes.get('/', async (req, res) => {
  const api = new pipedrive.DealsApi()
  const deals = await api.getDeals()

  res.send(deals)
})

export default routes