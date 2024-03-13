/* eslint-disable no-nested-ternary */
const React = require('react');
const Layout = require('./Layout');
const UserCard = require('./components/UserCard');

module.exports = function UserPage({ login, userCards }) {
  return (
    <Layout login={login}>
      <div className="addCard">
        <form className="cardCreate">
          <p className="msg"> </p>
          <label htmlFor="cardName">
            Название
            <br />
            <input type="text" name="cardName" />
          </label>

          <label htmlFor="cardPrice">
            Цена
            <br />
            <input type="text" name="cardPrice" />
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
            <input type="file" name="cardImg" />
          </label>

          <button className="cardAddBtn" type="button">
            Создать
          </button>
        </form>
      </div>
      <div className="cardContainer">
        <div className="cardContainer">
          {userCards?.map((card) => (
            <UserCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
