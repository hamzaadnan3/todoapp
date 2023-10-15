import  express  from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"

//importing routes
import userRoutes from "./routes/user.js"
import taskRouter from "./routes/task.js"



export const app =express()


//usig middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}))


//using routes
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/task",taskRouter)


config({
    path:"./data/config.env"
})

app.get("/", (req, res) => {
    res.send("Backend of TODO App is working");
  });

//importing error middleware
app.use(errorMiddleware)