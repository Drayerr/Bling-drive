import { Request, Response } from 'express'
import * as pipedrive from 'pipedrive'

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

export async function getNewDeals(req: Request, res: Response) {
  try {
    const api = new pipedrive.DealsApi()
    const deals = await api.getDeals(opts)

  return res.json(deals.data)
  // return res.json(deals.data.map(mapDeals))
  } catch(err) {
    console.log('Error: ', err);
  }
}