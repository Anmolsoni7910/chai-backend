import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


//routes import
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users", userRouter);  //router ko seprate kar deya hai to ab app.use karna parega router as a middleware aayga
// yaha se control fhir userRouter ke pass jayga or baha se kes route pe jana hai yaha declare keya jata hai
// jasse /users/register ya /users/login
//matlab control sethe userRouter ke pass chala jayga

export default app;