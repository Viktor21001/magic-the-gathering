const React = require('react');
const Layout = require('./Layout');

module.exports = function Register({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/reg.js" />
      <h3 style={{ textAlign: 'center' }} className="hTag">
        Введите данные для регистрации:
      </h3>
      <hr />
      <form action="/reg" method="POST" id="regForm">
        <label htmlFor="regInput" className="form-label">
          Логин
          <input
            name="login"
            type="text"
            className="form-control shadow rounded"
            id="regInput"
            placeholder="Введите ваш логин:"
            required
          />
        </label>

        <label htmlFor="regEmailInput" className="form-label">
          Email
          <input
            name="email"
            type="email"
            className="form-control shadow rounded"
            id="regEmailInput"
            placeholder="Введите вашу почту:"
            required
          />
        </label>

        <label htmlFor="regInput" className="form-label">
          Город
          <input
            name="town"
            type="text"
            className="form-control shadow rounded"
            id="regInput"
            placeholder="Введите ваш логин:"
            required
          />
        </label>

        <label htmlFor="regPassInput" className="form-label">
          Пароль
          <input
            name="password"
            type="password"
            className="form-control shadow rounded"
            id="regPassInput"
            placeholder="Введите ваш пароль:"
            required
          />
        </label>

        <button type="submit" className="btn btn-primary shadow rounded">
          Зарегистрироваться
        </button>
      </form>
      <hr />
      <h3 style={{ textAlign: 'center' }} className="regMsg">
        {' '}
      </h3>
    </Layout>
  );
};
