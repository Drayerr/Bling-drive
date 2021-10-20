import 'dotenv/config'
import express from 'express'
import routes from './routes'

const pipedrive = require('pipedrive')

const PORT = process.env.PORT || 3333

const defaultClient = pipedrive.ApiClient.instance

let apiToken = defaultClient.authentications.api_key
apiToken.apiKey = process.env.PIPEDRIVE_TOKEN

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))