import {Router, Request, Response} from 'express'

const pageRouter = Router()

// Home
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('home', {
    title: "Home"
  })
  
})

pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', {
    title: "About Us"
  })
  
})

pageRouter.get('/contact', (req: Request, res: Response) => {
  res.status(200).render('contact', {
    title: "Contact Us"
  })
  
})

export default pageRouter