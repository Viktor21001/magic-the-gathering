const React = require('react');

// const cardBackgroundImage = './media/infoCard.jpg';
const testCard = './media/testCard.jpg';

function CardBasket({ card, login }) {
  return (
    <div className="cardsPage">
      {/* Левая часть: Изображение карточки */}
      <img
        src={testCard}
        alt={card.cardName}
        style={{
          width: '300px',
          height: '420px',
          borderRadius: '13px',
        }}
      />
      {/* Правая часть: Детали карточки */}
      <div className="card-details">
        <h4>{card?.cardName}</h4>
        <p>Город: {card?.User?.city}</p>
        <p>Цена: {card?.cardPrice}</p>
        <p>Состояние: {card?.wear}</p>
        {login && (
          <button className="buyBtn" type="button">
            Купить
          </button>
        )}
      </div>
    </div>
  );
}

module.exports = CardBasket;
