import express from "express";
import userRouter from "./routes/user.js"
import errorHandler from "./middlewares/errorHandler.js"


const app = express();

app.use(express.json());

app.use("/users", userRouter)

app.use(errorHandler)

app.listen(8000, () => {
console.log("server körs på http://localhost:8000");
})