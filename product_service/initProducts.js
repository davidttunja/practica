const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); // Asegúrate de que el modelo esté correcto.

dotenv.config();

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB conectado para inicialización');
    
    // Crear productos por defecto
    const defaultProducts = [
      { name: 'Producto A', price: 100 },
      { name: 'Producto B', price: 200 }
    ];

    try {
      await Product.insertMany(defaultProducts);
      console.log('Productos por defecto creados');
    } catch (err) {
      console.error('Error al crear productos por defecto:', err.message);
    }

    mongoose.disconnect();
  })
  .catch(err => console.error('Error al conectar a MongoDB:', err));
