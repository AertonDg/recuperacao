import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const registerproduto = (req, res) => {
  const { nome,  descricao,  preco, estoque } = req.body;

  if (!nome || !preco || !estoque || !descricao)  {
    return res
      .status(400)
      .json({ msg: "Preencha todos os campos obrigatórios." });
  }

  const produtoId = uuidv4();

  const sql =
    "INSERT INTO produto (produtoId, nome,  descricao,  preco, estoque) VALUES (?, ?, ?, ?, ?)";

  conn.query(
    sql,
    [produtoId, nome,  descricao,  preco, estoque || null],
    (err, results) => {
      if (err) {
        console.error("Erro ao criar o produto:", err);
        return res.status(500).json({ msg: "Erro ao criar o produto." });
      }
      res.status(201).json({ msg: "produto criado com sucesso!", produtoId });
    }
  );
};

export const  produtos = (req, res) => {
  const sql = /*sql*/ `
    SELECT * FROM produto
  `;

  conn.query(sql, (err, data) => {
    if (err) {
      console.error("Erro ao buscar produtos:", err);
      return res.status(500).json({ msg: "Erro ao buscar os produtos." });
    }
    res.status(200).json(data);
  });
};

