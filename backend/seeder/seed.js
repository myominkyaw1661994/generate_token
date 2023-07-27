const db = require('../startup/db')();

const query = `
    CREATE DATABASE token_gen;
    USE token_gen;
    CREATE TABLE surveys (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        designation VARCHAR(255) NOT NULL,
        token_number VARCHAR(255) NOT NULL,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
`;

db.query(query, (err, data) => {
    if(err) {
        console.log(err.message);
    }else{
        console.log("Seed Successful.")
        console.log(data)
    }
});
