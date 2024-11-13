import express from "express";
import {getMessage, sendMessage} from "../controllers/message.controllers.js";
import verifyRoute from "../middlewares/verifyRoute.js";

const router=express.Router();

router.post('/send/:id',verifyRoute,sendMessage);

router.get('/rec/:id',verifyRoute,getMessage);

export default router;
