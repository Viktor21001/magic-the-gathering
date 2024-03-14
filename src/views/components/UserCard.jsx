const React = require('react');

const testCard = '../../media/testCard.jpg';

function UserCard({ card, login }) {
  return (
    <div className="userCard">
      <img
        src={card.cardImg}
        alt={card.cardName}
        style={{
          width: '300px',
          height: '420px',
          borderRadius: '13px',
        }}
      />
      <div className="cardDetails formStyle1">
        <h4>{card?.cardName}</h4>
        <p>City: {card?.User.city}</p>
        <p>Price: {card?.cardPrice}</p>
        <p>Wear: {card?.wear}</p>
        <button data-id={card.id} type="button" className="editBtn buttonStyle">Редактировать</button>
        <button data-id={card.id} type="button" className="deleteBtn buttonStyle">Удалить</button>
      </div>
    </div>
  );
}

module.exports = UserCard;
