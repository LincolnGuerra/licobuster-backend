const express = require('express');
const app = express();

require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro ao conectar ao Atlas:', err));

app.use(express.json()); // Para parsear JSON no body
app.use('/api/auth', require('./routes/auth')); // Rotas de autenticação

app.get('/', (req, res) => {
  res.send('Olá do backend de licobuster!');
});

app.listen(5000, () => {
  console.log('Servidor rodando em http://localhost:5000');
});