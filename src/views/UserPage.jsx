/* eslint-disable no-nested-ternary */
const React = require('react');
const Layout = require('./Layout');
const UserCard = require('./components/UserCard');

module.exports = function UserPage({ login, userCards }) {
  return (
    <Layout login={login}>
      <div className="addCard">
        <form
          className="cardCreate"
          method="POST"
          action="/cards/new"
          encType="multipart/form-data"
        >
          <p className="msg"> </p>
          <label htmlFor="cardName">
            Название
            <br />
            <input type="text" name="cardName" required />
          </label>

          <label htmlFor="cardPrice">
            Цена
            <br />
            <input type="text" name="cardPrice" required />
          </label>

          <label htmlFor="wear">
            Степень изношенности
            <br />
            <select name="wear">
              <option>Идеальное</option>
              <option>Есть незначительные повреждения</option>
              <option>Есть повреждения</option>
            </select>
          </label>

          <label htmlFor="cardImg">
            Прикрепить изображение карты
            <br />
            <input type="file" name="cardImg" multiple />
          </label>

          <button className="cardAddBtn" type="submit">
            Создать
          </button>
        </form>
      </div>
      <div className="cardContainer">
        {userCards?.map((card) => (
          <UserCard key={card.id} card={card} />
        ))}
      </div>
      <script defer src="/js/cardFetch.js" />
    </Layout>
  );
};
