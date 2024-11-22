import express from "express";
import { registerClientes, getClientes } from "../controllers/clientesController.js";

const router = express.Router();

router.post("/", registerClientes);
router.get("/", getClientes);

export default router;
