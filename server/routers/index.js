import express from "express";
import dataRouter from "./getData.js";

const router = express.Router();

router.use("/data", dataRouter);

export default router;
