import conn from "../config/conn.js";


export const verificarEmailExistente = (email, callback) => {
    const sql = "SELECT * FROM clientes WHERE email = ?";
  
    conn.query(sql, [email], (err, results) => {
        if (err) {
            console.error(err);
            return callback(err, null);
        }
        callback(null, results.length > 0);
    });
};