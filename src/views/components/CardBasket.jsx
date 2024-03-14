const React = require('react');

// const cardBackgroundImage = './media/infoCard.jpg';
const testCard = './media/testCard.jpg';

function Card({ basket }) {
  // console.log('..', card.id);
  return (
    <div className="oneCard">
      <img
        src={basket.Card.cardImg}
        alt={basket.Card.cardName}
        style={{
          width: '300px',
          height: '420px',
          borderRadius: '13px',
        }}
      />

      <div
        // id={`card-${card.id}`}
        className="card-details"
      >
        <h3>Название: {basket.Card.cardName}</h3>
        <p>Город: {basket.Card.User.city}</p>
        <p>Цена: {basket.Card.cardPrice}</p>
        <p>Состояние: {basket.Card.wear}</p>
        <button
          data-cardid={basket.cardId}
          data-basketid={basket.id}
          type="button"
          className="card-basket-delete"
        >
          Удалить из корзины
        </button>
      </div>
    </div>
  );
}

module.exports = Card;
