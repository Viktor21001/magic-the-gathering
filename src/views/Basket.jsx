const React = require('react');
const Layout = require('./Layout');
const CardBasket = require('./components/CardBasket');

module.exports = function BasketPage({ login, baskets }) {
  return (
    <Layout login={login}>
      <div className="basket">
        <div className="basket-conteiner">
          <span className="basket-header">Зaходим в </span>

          {/* <img src={orderInfo.Item.itemPhotoLink} alt="itemphoto" /> */}
          <div className="basketContainer">
            {baskets?.map((basket) => (
              <CardBasket key={basket.id} basket={basket} />
            ))}
          </div>

          <button type="submit" id="del-card" className="btn-card-del">
            купить карточки из корзины
          </button>
        </div>
      </div>
      <script defer src="/js/basket.js" />
    </Layout>
  );
};
