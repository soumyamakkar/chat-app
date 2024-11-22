import express from "express";

import { getUsers } from "../controllers/users.controllers.js";
import  verifyRoute  from "../middlewares/verifyRoute.js";
const router=express.Router();

router.get('/',verifyRoute,getUsers);

export default router;

