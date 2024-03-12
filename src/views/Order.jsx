const React = require("react");

module.exports = function Order({}) {
  console.log("привет");

  // itemArt
  // itemTitle
  // itemDescription
  // itemPhotoLink
  // itemPrice
  // itemQuantity
  return (
    <div className="card">
      <span className="card-header">ЗАходим </span>
      <p>Артикул: </p>
      {/* <img src={orderInfo.Item.itemPhotoLink} alt="itemphoto" /> */}
      <div className="card-content"></div>
      {/* {orderInfo.orderUserId === userId ? ( */}
      {/* <> */}
      {/* <form> */}
      <p>Количество товара:</p>

      {/* <p>К оплате: <span className="order-price">{orderInfo.Item.itemPrice * orderInfo.orderItemQuantity}</span> у.е.</p>
        <div className="card-button-wrapper">
          <button
            className="card-button order-remove-button"
            data-id={orderInfo.id}
            type="button"
          >
            Отменить заказ
          </button>
        </div>
      </>
      ) : null} */}
      <div className="card-info">
        <p>
          Цена: <span className="item-price"></span> у.е.
        </p>
        <p>В наличии у продавца: X шт.</p>
        <p>
          Продавец: <a href={`/user/`}></a>
        </p>
        <p>Заказано: X </p>
      </div>
    </div>
  );
};
