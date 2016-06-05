import { Router } from 'express'
var router = Router()

router.get('/', (req, res) => {
  const { name = 'luhaha' } = req.query
  res.send(`Hello, ${name}`)
})

export default router