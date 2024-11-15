const express = require('express');
const app = express();

// Configuration de CORS
//const cors = require('cors');
//app.use(cors());

// Exportation du serveur avec module.exports
module.exports = app.listen(8000, () => {
  console.log('Serveur à l\'écoute sur le port 8000');
});