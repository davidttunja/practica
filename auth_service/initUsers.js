const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Conectado a MongoDB para inicialización');
    
    const exists = await User.findOne({ username: 'admin' });
    if (!exists) {
      await User.create({ username: 'admin', password: 'admin123' });
      console.log('Usuario por defecto creado: admin/admin123');
    } else {
      console.log('Usuario por defecto ya existe');
    }
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error conectando a MongoDB:', err);
    mongoose.connection.close();
  });
