console.log('Скрипт подключен');

const testCard = '../media/testCard.jpg';

const cardContainer = document.querySelector('.cardContainer');
const cardCreateForm = document.querySelector('.cardCreate');

cardCreateForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(cardCreateForm);
  const inputs = Object.fromEntries(formData);
  try {
    const response = await fetch('/cards/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    const { newCard, user } = await response.json();
    if (newCard) {
      const cardElement = document.createElement('div');
      cardElement.className = 'userCard';
      cardElement.innerHTML = `
        <img
          src="${newCard.cardImg.length > 10 ? newCard.cardImg : testCard}"
          alt="${newCard.cardName}"
          style="width: 300px; height: 420px; border-radius: 13px;"
        />
        <div class="cardDetails">
          <h4>${newCard.cardName}</h4>
          <p>City: ${user.city}</p>
          <p>Price: ${newCard.cardPrice}</p>
          <p>Wear: ${newCard.wear}</p>
          <button type="button" class="editBtn">Редактировать</button>
          <button type="button" class="deleteBtn">Удалить</button>
          </div>
          `;

      cardContainer.append(cardElement);

      cardCreateForm.querySelectorAll('input').forEach((input) => {
        input.value = '';
      });
    }
  } catch (error) {
    console.log(error);
  }
});

cardContainer.addEventListener('click', async (e) => {
  if (e.target.classList.contains('editBtn')) {
    const cardId = e.target.dataset.id;
    try {
      const card = await fetch(`/cards/${cardId}`);
      const cardDetails = await card.json();

      cardCreateForm.innerHTML = `
      <p class="msg"> </p>
      <label htmlFor="cardName">
        Название
        <br />
        <input type="text" name="cardName" value="${cardDetails.cardName}" required />
      </label>

      <label htmlFor="cardPrice">
        Цена
        <br />
        <input type="text" name="cardPrice" value="${cardDetails.cardPrice}" required />
      </label>

      <label htmlFor="wear">
        Степень изношенности
        <br />
        <select name="wear">
          <option>Идеальное</option>
          <option>Есть незначительные повреждения</option>
          <option>Есть повреждения</option>
        </select>
      </label>

      <label htmlFor="cardImg">
        Прикрепить изображение карты
        <br />
        <input type="text" name="cardImg" value="${cardDetails.cardImg}" required />
      </label>

      <button data-id=${cardDetails.id} class="cardUpdBtn" type="submit">
        Обновить
      </button>
      `;
      const cardUpdBtn = cardCreateForm.querySelector('.cardUpdBtn');
      cardUpdBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const formData = new FormData(cardCreateForm);
        const inputs = Object.fromEntries(formData);
        try {
          const response = await fetch(`/cards/${cardId}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(inputs),
          });
          if (response.ok) {
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else if (e.target.classList.contains('deleteBtn')) {
    const cardId = e.target.dataset.id;
    try {
      const response = await fetch(`/cards/${cardId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        e.target.closest('.userCard').remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
});
