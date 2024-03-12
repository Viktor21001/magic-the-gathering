/* eslint-disable no-nested-ternary */
const React = require('react');
const Layout = require('./Layout');

module.exports = function UserPage({ login }) {
  return (
    <Layout login={login}>
      <div className="addCard">
        <form className="cardCreate">
          <p className="msg"> </p>
          <label key>
            Название
            <input type="text" />
          </label>

          <label>
            Цена
            <input type="text" />
          </label>

          <label>
            Степень изношенности
            <input type="text" />
          </label>

          <label>
            Степень изношенности
            <select>
              <option>Идеальное</option>
              <option>Есть незначительные повреждения</option>
              <option>Есть повреждения</option>
            </select>
          </label>

          <label>
            Прикрепить изображение карты
            <input type="file" />
          </label>
        </form>
      </div>
      <div className="cardContainer" />
    </Layout>
  );
};
