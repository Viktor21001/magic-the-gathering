const jwt = require('jsonwebtoken');

// Функция для генерации JWT, принимает данные пользователя и секретный ключ
const generateJwt = (id, login, email, city) =>
  jwt.sign(
    {
      id,
      login,
      email,
      city,
    },
    process.env.JWT_SECRET_KEY, // Секретный ключ из .env файла
    { expiresIn: '24h' }, // Время жизни токена - 24 часа
  );

module.exports = generateJwt;
