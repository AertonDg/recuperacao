

import conn from "../config/conn.js";

const tableProduto = /*sql*/ `
    CREATE TABLE IF NOT EXISTS produto (
        produtoId VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        descricao VARCHAR(255) NOT NULL,
        preco VARCHAR(255) NOT NULL, 
        estoque VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        
    )
`;
conn.query(tableProduto, (err) => {
  if (err) {
    console.error("Erro ao criar a tabela de [Produto]:", err);
    return;
  }
  console.log("Tabela de [Prduto] criada com sucesso");
});

export default tableProduto;