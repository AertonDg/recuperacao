import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";
import { verificarEmailExistente } from "../helpers/authParticipante.js";

export const registerpedidos = (req, res) => {
    const { clienteId, itens, status, data } = req.body;
  
    if (!clienteId || !itens || !status || !data) {
        return res.status(400).json({ msg: "Preencha todos os campos obrigatórios." });
    }
        const id = uuidv4();
  
        const sql = "INSERT INTO pedido (clienteId, itens, status, data) VALUES (?, ?, ?, ?)";
  
        conn.query(sql, [id, clienteId, itens, status, data], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: "Erro ao criar o pedido." });
            }
            res.status(201).json({ msg: "pedido criado com sucesso!", id });
        });
    }

export const getPedidos = (req, res) => {
  const sql = "SELECT * FROM pedido";

  conn.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: "Erro ao buscar os pedidos." });
    }
    res.status(200).json(data);
  });
};