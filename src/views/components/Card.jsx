const React = require('react');

function Card({ card, login }) {
  return (
    <div className="card">
      <img
        src={card?.cardImg}
        alt={card?.cardName}
        style={{ width: '100px', height: '140px' }}
      />
      <div className="cardDetails">
        <h3>{card?.cardName}</h3>
        <p>Price: {card?.cardPrice}</p>
        <p>Wear: {card?.wear}</p>
        <p>Seller ID: {card?.seller}</p>
        {login && <button type="button">Добавить в корзину</button>}
      </div>
    </div>
  );
}

module.exports = Card;
