import todayIs from "./today"

export default function aggregate(data: any) {
  try {
    // Pegando data do dia para comparar com o que será buscado
    const today = todayIs()

    const filteredData = data.data.retorno.pedidos

    let total = 0

    // Somando valor acumulado no dia de Hoje
    for (let i = 0; i < filteredData.length; i++) {
      const item = filteredData[i].pedido
      if (item.data === today) {
        total = parseFloat(item.totalvenda) + total
      }
    }

    const response = {
      date: today,
      total: total
    }

    return  response

  } catch (err) {
    console.log('Error at aggregate(): ', err);
  }
}
