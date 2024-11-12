import express from "express"
import dotenv from "dotenv"
import router from './routes/auth.routes.js'
import connection from "./db/mongodb.conn.js";



dotenv.config()
const app=express();

const PORT=process.env.PORT
app.use(express.json())
console.log(process.env)
app.use('/api/v1/auth',router)

app.listen(PORT,()=>{
    connection();
    console.log(`Server is running at: ${PORT}`);
})