// This is your server file :)
import express, {Request, Response, NextFunction} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import pageRouter from './routes/page.routes'
dotenv.config()

// create Server
const app = express()

// Set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

// MiddleWare
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', pageRouter)

// Fallback / 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Invalid route!")
})

// Start server
const PORT = process.env.PORT
if (!PORT) {
  throw new Error("Missing port!")
}
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})