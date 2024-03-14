const React = require('react');

// const cardBackgroundImage = './media/infoCard.jpg';
const testCard = './media/testCard.jpg';

function Card({ card, login }) {
  return (
    <div className="cardsPage">
      {/* Левая часть: Изображение карточки */}
      <img
        src={card.cardImg}
        alt={card.cardName}
        style={{
          width: '300px',
          height: '420px',
          borderRadius: '13px',
        }}
      />
      {/* Правая часть: Детали карточки */}
      <div className="card-details formStyle">
        <h4>{card?.cardName}</h4>
        <p>Город: {card?.User?.city}</p>
        <p>Цена: {card?.cardPrice}</p>
        <p>Состояние: {card?.wear}</p>
        {login && (
          <button
            data-card={card.id}
            className="buyBtn buttonStyle"
            type="button"
          >
            Купить
          </button>
        )}
      </div>
    </div>
  );
}

module.exports = Card;
