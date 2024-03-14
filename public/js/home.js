// console.log('check connection');

const { search, filter } = document.forms;
const searchInput = document.querySelector('.search');
const selectFilter = filter.querySelector('.filter');
const cardContainer = document.querySelector('.cardContainer');

search.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = searchInput.value;

  try {
    const response = await fetch(`/cards/title/${title}`);
    const result = await response.json();
    console.log(result);
    if (result.length > 0) {
      let cardsHTML = '';
      for (let i = 0; i < result.length; i++) {
        cardsHTML += `
        <div class="cardsPage">
          <img
          src=${result[i].cardImg}
          alt=${result[i].cardName}
          style={{
            width: '300px',
            height: '420px',
            borderRadius: '13px',
          }}
        />
          <div class="card-details">
            <h4>${result[i].cardName}</h4>
            <p>Город: ${result[i].User.city}</p>
            <p>Цена: ${result[i].cardPrice}</p>
            <p>Состояние: ${result[i].wear}</p>
            <button data-card=${result[i].id} className="buyBtn" type="button">
              Купить
            </button>
          </div>
        </div>
        `;
      }
      cardContainer.innerHTML = cardsHTML;
    } else {
      cardContainer.innerHTML = '<h2>Искомых карт нет в продаже</h2>';
    }
  } catch (error) {
    console.log(error);
  }
});

filter.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = selectFilter.value;

  try {
    const response = await fetch(`/cards/cities/${city}`);
    const result = await response.json();
    console.log(result);
    if (result.length > 0) {
      let cardsHTML = '';
      for (let i = 0; i < result.length; i++) {
        cardsHTML += `
        <div class="cardsPage">
          <img
          src=${result[i].cardImg}
          alt=${result[i].cardName}
          style={{
            width: '300px',
            height: '420px',
            borderRadius: '13px',
          }}
        />
          <div class="card-details">
            <h4>${result[i].cardName}</h4>
            <p>Город: ${result[i].User.city}</p>
            <p>Цена: ${result[i].cardPrice}</p>
            <p>Состояние: ${result[i].wear}</p>
            <button data-card=${result[i].id} className="buyBtn" type="button">
              Купить
            </button>
          </div>
        </div>
        `;
      }
      cardContainer.innerHTML = cardsHTML;
    } else {
      cardContainer.innerHTML = '<h2>Искомых карт нет в продаже</h2>';
    }
  } catch (error) {
    console.log(error);
  }
});
