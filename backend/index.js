import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser";
import authRouter from './routes/auth.routes.js'
import connection from "./db/mongodb.conn.js";
import messageRouter from "./routes/routes.message.js"


dotenv.config()
const app=express();

const PORT=process.env.PORT

app.use(express.json())
app.use(cookieparser());


app.use('/api/v1/auth',authRouter)
app.use("/api/v1/message",messageRouter);

app.listen(PORT,()=>{
    connection();
    console.log(`Server is running at: ${PORT}`);
})