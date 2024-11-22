import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3333;

import conn from "./config/conn.js";

import "./models/pedidoModel.js";
import "./models/clienteModel.js";  
import "./models/produtoModel.js";

import ClientesRouter from "./routes/clientesRouter.js";
import produtoRouter from "./routes/produtoRouter.js";
import pedidosRouter from "./routes/pedidosRouter.js";


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/produto",  produtoRouter);
app.use("/clientes",  ClientesRouter);
app.use("/pedidos",  pedidosRouter);


app.get("/app", (req, res) => {
  res.send("Servidor está funcional e rodando!");
});

app.use((req, res) => {
  res.status(404).json({ msg: "Recurso não encontrado" });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});