const React = require('react');
const Layout = require('./Layout');
const Card = require('./components/Card');

module.exports = function Main({ login, cards }) {
  return (
    <Layout login={login}>
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
        Magic: The Gathering
      </h3>
      {/* <script defer src="/js/addFetch.js" /> */}
      {login ? (
        <>
          <div className="filter">
            <form name="filter">
              <select className="filter">
                <option disabled selected>Выбрать город:</option>
                {Array.from(new Set(cards.map((card) => card.User.city))).map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
              <button className="btnFilter" type="submit">Filter</button>
            </form>
            <form name="search">
              <input type="search" className="search" placeholder="Search" aria-label="Search" list="search" />
              <datalist id="search">
                {Array.from(new Set(cards.map((card) => card.cardName))).map((cardName, index) => (
                  <option key={index} value={cardName}>{cardName}</option>
                ))}
              </datalist>
              <button className="btnSearch" type="submit">Search</button>
            </form>
          </div>
          <div className="cardContainer">
            {cards?.map((card) => (
              <Card key={card.id} card={card} login={login} />
            ))}
          </div>
          <script defer src="/js/home.js" />
        </>
      ) : (
        <div className="cardContainer">
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
      <script defer src="/js/addCardBasket.js" />
    </Layout>
  );
};
