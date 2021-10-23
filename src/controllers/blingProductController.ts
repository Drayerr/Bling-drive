import 'dotenv/config'
import axios from 'axios'
import { getNewDeals } from '../services/getNewDeals'
import { Request, Response } from 'express'
import getBlingSummary from '../services/getBlingSummary'

const URL = `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_TOKEN}`

// Função para enviar dados ao Bling
// Implementar alteração no Pipedrive
async function postDeal(xml: string) {
  try {
    await axios.post(`${URL}&xml=${xml}`)
  } catch (err: any) {
    console.log('Error at postDeal()', err.response.statusText);
  }
}

// Função para converter as deals em xml e enviar para o bling.
// Se tiver um produto com mesmo nome de cliente e mesma descrição, ele recusa.
// Não pode ter acento
async function createXml(newDeal: NewDealsProps[]) {
  for (let i = 0; i < newDeal.length; i++) {

    const deal = newDeal[i]

    if(!deal.person_name || !deal.title) {
      console.log('Error at createXml');
    }

    const xml = `
    <pedido>
      <cliente>
        <nome>${deal.person_name}</nome>
      </cliente>
      <item>
        <codigo>3117</codigo>
        <descricao>${deal.title}</descricao>
        <qtde>${deal.products_count}</qtde>
        <vlr_unit>${deal.value}</vlr_unit>
      </item>
    </pedido>
`
    await postDeal(xml)
  }
}

export async function addDeals(req: Request, res: Response) {
  try {
    getNewDeals().then(async (response) => {
      await createXml(response)
      // await getBlingSummary()
      return res.json(response)
    })
  } catch (err) {
    console.log('upDeals() Error: ', err);
    return err
  }
}
