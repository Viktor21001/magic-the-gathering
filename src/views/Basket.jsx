const React = require('react');
const Layout = require('./Layout');
const CardBasket = require('./components/CardBasket');

module.exports = function BasketPage({ login, baskets }) {
  return (
    <Layout login={login}>
      <div className="basket-main">
        <div className="basketContainer">
          {baskets?.map((basket) => (
            <CardBasket key={basket.id} basket={basket} />
          ))}
        </div>

        <button type="submit" id="bay-card" className="btn-card-bay">
          Купить
        </button>
      </div>

      <script defer src="/js/basket.js" />
      <script defer src="/js/buy.js" />
    </Layout>
  );
};
