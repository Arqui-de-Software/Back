const express = require('express');

const app = express();

app.use(express.json())


// Routes
app.use('/pedidos', require('./cafeteria/pedidos'));

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.status(404).json({ message: 'Path not found' });
});

app.listen(PORT, () => {
  console.log(`☕ Server running at http://localhost:${PORT}`);
});
