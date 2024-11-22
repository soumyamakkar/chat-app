import express from 'express'
import {logout,login,signup} from '../controllers/auth.controller.js'
import verifyRoute from '../middlewares/verifyRoute.js'
const router=express.Router()


router.post('/signup',signup)

router.post('/login',login)

router.post('/logout',verifyRoute,logout)

export default router;