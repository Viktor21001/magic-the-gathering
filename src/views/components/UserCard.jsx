const React = require('react');

const testCard = '../../media/testCard.jpg';

function UserCard({ card, login }) {
  return (
    <div className="userCard">
      <img
        src={card.cardImg.length > 10 ? card.cardImg : testCard}
        alt={card.cardName}
        style={{
          width: '300px',
          height: '420px',
          borderRadius: '13px',
        }}
      />
      <div className="cardDetails">
        <h4>{card?.cardName}</h4>
        <p>City: {card?.User.city}</p>
        <p>Price: {card?.cardPrice}</p>
        <p>Wear: {card?.wear}</p>
        <button data-id={card.id} type="button" className="editBtn">Редактировать</button>
        <button data-id={card.id} type="button" className="deleteBtn">Удалить</button>
      </div>
    </div>
  );
}

module.exports = UserCard;
