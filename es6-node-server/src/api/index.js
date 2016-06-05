import { Router } from 'express'
var router = Router()

import sayHello from './sayHello'
router.use('/hello', sayHello)

export default router