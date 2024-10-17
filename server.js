import express from 'express';
import authRouter from "./routes/auth.route.js"
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
const app = express();
const PORT = ENV_VARS.PORT

app.use(express.json()) // it's allows you parse body json
app.use("/api/v1/auth",authRouter)
app.get("", (req, res) => {
    res.send("Server is running 123")
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
    connectDB()
})


