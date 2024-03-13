const React = require('react');

// const cardBackgroundImage = './media/infoCard.jpg';
const testCard = './media/testCard.jpg';

function Card({ basket }) {
  // console.log('..', card.id);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', // Элементы будут переноситься на новую строку
        justifyContent: 'flex-start', // Элементы выровнены по началу контейнера
        alignItems: 'flex-start', // Выравнивание элементов по началу по вертикали
        gap: '20px', // Расстояние между карточками
        padding: '10px', // Отступы внутри контейнера
        maxWidth: '100%', // Максимальная ширина контейнера
      }}
    >
      {/* Левая часть: Изображение карточки */}
      <img
        src={testCard}
        alt={basket.Card.cardName}
        style={{
          width: '300px',
          height: '420px',
          borderRadius: '13px',
        }}
      />
      {/* Правая часть: Детали карточки */}
      <div
        // id={`card-${card.id}`}
        className="card-details"
        style={{
          borderRadius: '13px',
          padding: '20px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          backgroundColor: '#ffffff',
          marginLeft: '-10px',
        }}
      >
        <h3 style={{ margin: '0.5em 0' }}>Название: {basket.Card.cardName}</h3>
        <p style={{ margin: '0.5em 0' }}>Город: {basket.Card.User.city}</p>
        <p style={{ margin: '0.5em 0' }}>Цена: {basket.Card.cardPrice}</p>
        <p style={{ margin: '0.5em 0' }}>Состояние: {basket.Card.wear}</p>
        <button
          type="button"
          data-cardid={basket.cardId}
          className="card-delete"
          style={{
            background: '#8c7a5b',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            margin: '10px 0',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          Удалить из корзины
        </button>
      </div>
    </div>
  );
}

module.exports = Card;
