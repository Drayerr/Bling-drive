import products from "../models/products"
import getBlingSummary from "./getBlingSummary";

export default async function postMongo() {
  try {
    const data = await getBlingSummary()

    console.log('data', data);


    if(data === undefined) {
      console.log('Nothing to post');
      return
    }

    const { total, date } = data

    await products.create({
      total,
      date,
    })

    console.log('Successfully inserted to database');
  } catch(err: any) {
    console.log('Error at postMongo()', err.response.statusText);
  }
}
