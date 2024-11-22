import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const registerClientes = (req, res) => {
  const { nome, email, telefone, endereco } = req.body;

  if (!nome || !email || !telefone || !endereco ) {
    return res
      .status(400)
      .json({ msg: "Preencha todos os campos obrigatórios." });
  }

  const id = uuidv4();

  const sql =
    "INSERT INTO cliente (id, nome, email, telefone, endereco) VALUES (?, ?, ?,?,?)";

  conn.query(sql, [id, nome, email, telefone, endereco], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: "Erro ao criar o cliente." });
    }
    res.status(201).json({ msg: "cliente criado com sucesso!", id });
  });
};

export const getClientes = (req, res) => {
  const sql = "SELECT * FROM cliente";

  conn.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: "Erro ao buscar os clientes." });
    }
    res.status(200).json(data);
  });
};
