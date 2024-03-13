const React = require('react');
const Layout = require('./Layout');
const Card = require('./components/Card');

module.exports = function Main({ login, cards }) {
  return (
    <Layout login={login}>
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Magic: The Gathering</h3>
      {/* <script defer src="/js/addFetch.js" /> */}
      {login ? (
        <>
          <div className="filter">
            <input />
            <input type="search" />
          </div>
          <div className="cardContainer">
            {cards?.map((card) => (
              <Card key={card.id} card={card} login={login} />
            ))}
          </div>
        </>
      ) : (
        <div className="cardContainer">
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </Layout>
  );
};
