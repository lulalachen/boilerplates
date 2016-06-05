import { Router } from 'express'
var router = Router()

router.get('/', (req, res) => {
  const { name = 'luhaha' } = req.query
  res.status(200).send({
    message: `Hello, ${name}`
  })
})

export default router