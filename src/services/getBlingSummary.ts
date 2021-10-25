import 'dotenv/config'
import axios from 'axios'
import aggregate from '../utils/aggregate'

const URL = `https://bling.com.br/Api/v2/pedidos/json/?apikey=${process.env.BLING_TOKEN}`

// Função para pegar resumo do dia no Bling
export default async function getBlingSummary(): Promise<dayTotalProps | undefined> {
  try {
    const data = await axios.get(URL)

    const daySummary = aggregate(data)

    return daySummary
  } catch (err: any) {
    console.log('Error at getBlingSummary(): ', err.response.statusText);
  }
}
