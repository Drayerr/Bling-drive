import 'dotenv/config'
import axios from 'axios'

const URL = `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_TOKEN}`


const xml = `
    <pedido>
        <cliente>
            <nome> Drayerr  </nome>
        </cliente>
        <item>
            <codigo>3117</codigo>
            <descricao> Marmita </descricao>
            <qtde> 30 </qtde>
            <vlr_unit>  20  </vlr_unit>
        </item>
    </pedido>
`

export async function addDeals() {
    try {
        await axios.post(`${URL}&xml=${xml}`)
    } catch(err) {
        console.log('upDeals() Error: ', err);
        return err
    }
}