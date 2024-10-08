const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <div style={{ height: '83vh' }}>
        <h3 style={{ textAlign: 'center' }} className="hTag">
          Введите данные для авторизации:
        </h3>
        <hr />
        <form
          action="/login"
          method="POST"
          id="loginForm"
          className="formStyle"
        >
          <label htmlFor="loginInput" className="form-label">
            Логин
            <input
              name="login"
              type="text"
              className="form-control shadow rounded inputStyle"
              id="loginInput"
              placeholder="Введите ваш логин:"
              required
            />
          </label>

          <label htmlFor="passwordInput" className="form-label">
            Пароль
            <input
              name="password"
              type="password"
              className="form-control shadow rounded inputStyle"
              id="passwordInput"
              placeholder="Введите ваш пароль:"
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary shadow rounded buttonStyle"
          >
            Войти
          </button>
        </form>
        <hr />
        <h3 style={{ textAlign: 'center' }} className="regMsg">
          {' '}
        </h3>
      </div>
    </Layout>
  );
};
