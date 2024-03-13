const React = require("react");
const Layout = require("./Layout");
const CardPage = require("./components/Card");

module.exports = function Basket({ login, baskets }) {
  return (
    <Layout login={login}>
      <div className="basket">
        <div className="basket-conteiner">
          <span className="basket-header">ЗАходим в </span>

          {/* <img src={orderInfo.Item.itemPhotoLink} alt="itemphoto" /> */}
          <div className="cardContainer">
            {baskets?.map((basket) => (
              <CardPage key={basket.id} basket={basket} login={login} />
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
