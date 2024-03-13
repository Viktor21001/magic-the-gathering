const React = require('react');

function UserCard({ card, login }) {
  return (
    <div className="card">
      <img
        src={card?.cardImg}
        alt={card?.cardName}
        style={{ width: '100px', height: '140px' }}
      />
      <div className="cardDetails">
        <h3>{card?.cardName}</h3>
        <p>City: {card?.User.city}</p>
        <p>Price: {card?.cardPrice}</p>
        <p>Wear: {card?.wear}</p>
        <button type="button" className='editBtn'>Редактировать</button>
        <button type="button" className='deleteBtn'>Удалить</button>
      </div>
    </div>
  );
}

module.exports = UserCard;
