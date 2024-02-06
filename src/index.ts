import dotEnv from "dotenv";
import express, { Application, Request, Response } from 'express';
import userRouter from './routes/user.route';

dotEnv.config();
const app: Application = express();
const port: number = Number(process.env.PORT) || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '5mb'}));

app.get("/", (req: Request, res: Response) => {
    res.send("welcome to api")
});

app.use("/api/users", userRouter)

app.listen(port, () => {
    console.warn(`server started at http://localhost:${port}`)
})