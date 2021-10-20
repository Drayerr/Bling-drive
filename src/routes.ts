import express from 'express'
import * as pipedrive from 'pipedrive'

const routes = express.Router()

// Configurações de busca
// Filter 22: "Onde Sincronizado não é igual à 1"
let opts = {
  "status" : "won",
  "filterId" : "22"
}

// Mapeando informações necessárias
function mapDeals(deal : any) {
  return {
    id: deal.id,
    status: deal.status,
    org_name: deal.org_id.name,
    won_time: deal.won_time,
    person_name: deal.person_name,
    products_count: deal.products_count,
  }
}

routes.get('/', async (req, res) => {
  try {
    const api = new pipedrive.DealsApi()
    const deals = await api.getDeals(opts)

  // res.send(deals.data)
  res.send(deals.data.map(mapDeals))
  } catch(err) {
    console.log('Error: ', err);
  }
})

export default routes