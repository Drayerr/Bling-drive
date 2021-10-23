import 'dotenv/config'
import axios from 'axios'
import { getNewDeals } from '../services/getNewDeal'
import { Request, Response } from 'express'

const URL = `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_TOKEN}`

// Funçao para enviar dados ao Bling
// Implementar alteração no Pipedrive
async function postDeal(xml: string) {
  try {
    await axios.post(`${URL}&xml=${xml}`)
  } catch (err: any) {
    console.log('Error at postDeal()', err.response.statusText);
  }
}

// Função para converter as deals em xml e enviar para o bling.
// Aparentemente ele não aceita enviar nomes com acento
async function createXml(newDeal: NewDealsProps[]) {
  for (let i = 0; i > newDeal.length; i++) {
    const deal = newDeal[i]

    if(!deal.person_name || !deal.title || !deal.products_count) {
      console.log('Error at createXml');
    }

    const xml = `
    <pedido>
      <cliente>
        <nome> ${deal.person_name} </nome>
      </cliente>
      <item>
        <codigo>3117</codigo>
        <descricao> ${deal.title} </descricao>
        <qtde> ${deal.products_count} </qtde>
        <vlr_unit>  22  </vlr_unit>
      </item>
    </pedido>
`
    await postDeal(xml)
  }
}

export async function addDeals(req: Request, res: Response) {
  try {
    getNewDeals().then(async (response) => {
      createXml(response)
      return res.json(response)

    })
  } catch (err) {
    console.log('upDeals() Error: ', err);
    return err
  }
}
