import { Request, Response } from "express";
import postMongo from "../services/postMongo";

export default async function forcePostMongo(req: Request, res: Response) {
  try {
    await postMongo()
    return res.status(200).json({ msg: 'Successfully inserted to database' })
  } catch (err) {
    console.log('Error at forcePostMongo(): ', err);

  }
}
