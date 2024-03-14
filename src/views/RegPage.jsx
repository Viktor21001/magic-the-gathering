const React = require('react');
const Layout = require('./Layout');

module.exports = function Register({}) {
  return (
    <Layout>
      <script src="https://cdn.jsdelivr.net/npm/jwt-decode/build/jwt-decode.min.js" />
      <script defer src="/js/reg.js" />
      <h3
        style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}
        className="hTag"
      >
        Введите данные для регистрации:
      </h3>
      <hr />
      <form action="/reg" method="POST" id="regForm" className="formStyle">
        <label htmlFor="regInput" className="form-label">
          Логин
          <input
            name="login"
            type="text"
            className="form-control shadow rounded inputStyle"
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
            className="form-control shadow rounded inputStyle"
            id="regEmailInput"
            placeholder="Введите вашу почту:"
            required
          />
        </label>

        <label htmlFor="regInput" className="form-label">
          Город
          <input
            required
            name="city"
            className="form-control shadow rounded inputStyle"
            id="cityInput"
            placeholder="Введите ваш город:"
            list="cities"
          />
          <datalist id="cities">
            {/* {cities?.map((city) => (
              <option value={city.name} />
            ))} */}
            <option value="" />
          </datalist>
        </label>

        <label htmlFor="regPassInput" className="form-label">
          Пароль
          <input
            name="password"
            type="password"
            className="form-control shadow rounded inputStyle"
            id="regPassInput"
            placeholder="Введите ваш пароль:"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary shadow rounded buttonStyle"
        >
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
