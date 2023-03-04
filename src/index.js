// import depedencies
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// import files
import { mongoConection } from './database/mongoApp.js'
// import routes
import userRoutes from './routes/userRoutes.js'
import msgRoutes from './routes/msgRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
// import middlewares
import { notFound } from './middlewares/notFound.js'
import { handleError } from './middlewares/errorhandler.js'
// set environment variables
import * as dotenv from 'dotenv'
dotenv.config()
// config express
const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
// conecting to mongodb
mongoConection()

// call routes
app.use('/api', loginRoutes)
app.use('/api', userRoutes)
app.use('/api', msgRoutes)
// call midlewares

app.use(notFound)
app.use(handleError)
app.listen(process.env.PORT, _ => console.log(`listening on port ${process.env.PORT}`))
export default app
