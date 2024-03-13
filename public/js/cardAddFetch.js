console.log('Скрипт подключен');

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

    const {newCard, user} = await response.json();
    if (newCard) {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <img
          src="${newCard.cardImg}"
          alt="${newCard.cardName}"
          style="width: 100px; height: 140px"
        />
        <div class="cardDetails">
          <h3>${newCard.cardName}</h3>
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
