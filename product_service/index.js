const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authMiddleware = require('./middleware/auth');

dotenv.config();
const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Products DB conectado'))
  .catch(err => console.error(err));

// Modelo de producto
const Product = require('./models/Product');

// Crear producto (requiere autenticación)
app.post('/products', authMiddleware, async (req, res) => {
  const { name, price } = req.body;
  const product = new Product({ name, price });
  await product.save();
  res.status(201).send('Producto creado');
});

// Listar productos
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => console.log('Products Service corriendo en puerto 5000'));
