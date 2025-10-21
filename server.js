const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api/auth/register', (req, res) => {
  res.json({ message: 'Registro bem-sucedido', data: req.body });
});

app.listen(process.env.PORT || 10000, () => {
  console.log('Server running on port', process.env.PORT || 10000);
});