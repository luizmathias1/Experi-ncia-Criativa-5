import express from "express";
import cors from "cors";
import userRoute from "../CRUD/crontroller/user_controller/user_controller.js";


const app = express();
app.use(express.json());
app.use(cors());

app.use("/", userRoute);

app.listen(8080)

