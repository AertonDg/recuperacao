import express from "express";
import { registerpedidos, getPedidos } from "../controllers/pedidosController.js";

const router = express.Router();

router.post("/", registerpedidos);
router.get("/", getPedidos)

export default router;
