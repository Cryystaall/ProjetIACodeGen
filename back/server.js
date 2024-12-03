require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DTB,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données!');
});

app.get('/api/produits', (req, res) => {
  const query = 'SELECT * FROM produits'; 
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des produits:', err);
      res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
      return;
    }
    res.json(results); 
  });
});


app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
