import conn from "../config/conn.js";

const tableClientes = /*sql*/ `
    CREATE TABLE IF NOT EXISTS cliente (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

conn.query(tableClientes, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela de [cliente] criada com sucesso");
});

export default tableClientes;