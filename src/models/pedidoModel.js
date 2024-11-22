import conn from "../config/conn.js";

const tablePedido = /*sql*/ `
    CREATE TABLE IF NOT EXISTS pedido (
        id VARCHAR(60) PRIMARY KEY,
        clienteId VARCHAR(255) NOT NULL,
        itens VARCHAR(255) NOT NULL,
        status VARCHAR(255),
        data DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

conn.query(tablePedido, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela de [pedido] criada com sucesso");
});

export default tablePedido