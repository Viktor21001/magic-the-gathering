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
