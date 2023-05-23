import express from "express";
import routerApi from "./routers/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routerApi);

app.listen(PORT);
