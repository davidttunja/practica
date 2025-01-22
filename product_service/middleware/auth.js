const axios = require('axios');

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Token requerido');

  try {
    await axios.get(`${process.env.AUTH_URL}/auth/verify`, {
      headers: { Authorization: token },
    });
    next();
  } catch {
    res.status(401).send('Token inválido');
  }
};
