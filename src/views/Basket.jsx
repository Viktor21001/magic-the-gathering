const React = require('react');
const Layout = require('./Layout');
const CardPage = require('./components/CardBasket');

module.exports = function BasketPage({ login, baskets, cards }) {
  // console.log("🚀 ~ BasketPage ~ :", cards)
  console.log('🚀 ~ BasketPage ~ baskets:', baskets);

  return (
    <Layout login={login}>
      <div className="basket">
        <div className="basket-conteiner">
          <span className="basket-header">Зaходим в </span>

          {/* <img src={orderInfo.Item.itemPhotoLink} alt="itemphoto" /> */}
          <div className="cardContainer">
            {baskets?.map((basket) => (
              <CardPage key={cards.id} basket={basket} login={login} card={cards} />
            ))}
          </div>

          <button type="submit" id="del-card" className="button btncard-del">
            Удалить карточку
          </button>
        </div>
      </div>
      <script defer src="/js/basket.js" />
    </Layout>
  );
};
