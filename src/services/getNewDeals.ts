import 'dotenv/config'
import * as pipedrive from 'pipedrive'
import { addDeals } from '../controllers/blingProductController'

// Configurações de busca
// Filter 22: "Onde Sincronizado não é igual à 1"
let opts = {
  "status" : "won",
  "filterId" : process.env.CUSTOM_FILTER_ID
}

// Mapeando informações necessárias
function mapDeals(deal : any) {
  // Removendo a palavra "negócio" por que o bling não aceita acento.
  const title = deal.title.split(' ').filter((p : any) => p != 'Negócio').join(' ')

  return {
    id: deal.id,
    value: deal.value,
    title: title,
    status: deal.status,
    won_time: deal.won_time,
    person_name: deal.person_name,
    products_count: deal.products_count,
  }
}

export async function getNewDeals() : Promise<NewDealsProps[] | any> {
  try {
    const api = new pipedrive.DealsApi()
    const deals = await api.getDeals(opts)

    if(!deals) {
      console.log('There is no deals to sync!');
    }

    const mappedDeals : NewDealsProps = deals.data.map(mapDeals)
    return mappedDeals

  } catch(err) {
    console.log('getNewDeals() Error: ', err);
  }
}
