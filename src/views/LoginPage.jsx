const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <h3 style={{ textAlign: 'center' }} className="hTag">
        Введите данные для авторизации:
      </h3>
      <hr />
      <form action="/login" method="POST" id="loginForm">
        <label htmlFor="loginInput" className="form-label">
          <input
            name="login"
            type="text"
            className="form-control shadow rounded"
            id="loginInput"
            placeholder="Введите ваш логин:"
            required
          />
        </label>
        <label htmlFor="passwordInput" className="form-label">
          <input
            name="password"
            type="password"
            className="form-control shadow rounded"
            id="passwordInput"
            placeholder="Введите ваш пароль:"
            required
          />
        </label>
        <label className="form-label">
          <button type="submit" className="btn btn-primary shadow rounded">
            Войти
          </button>
        </label>
      </form>
      <hr />
      <h3 style={{ textAlign: 'center' }} className="regMsg"> </h3>
    </Layout>
  );
};
