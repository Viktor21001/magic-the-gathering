const jwt = require('jsonwebtoken');

const tokenCheckMiddleware = (req, res, next) => {
  const { token } = req.cookies; // Получаем токен из cookies

  if (!token) {
    // Если токен отсутствует, перенаправляем на главную страницу
    return res.redirect('/');
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY); // Проверяем токен
    next(); // Токен валиден, продолжаем обработку запроса
  } catch (error) {
    // Токен невалиден или истек его срок, перенаправляем на главную страницу
    return res.redirect('/');
  }
};

module.exports = tokenCheckMiddleware;
