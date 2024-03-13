// console.log('Скрипт подключен');

const form = document.querySelector('#regForm');
const logMsg = document.querySelector('.regMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  try {
    const response = await fetch('/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();

    if (result.regDone) {
      logMsg.innerText = 'Регистрация прошла успешно';
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
    if (result.err) {
      logMsg.innerText = 'Пользователь с таким логином или почтой уже существует';
    }
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

const cityInput = document.querySelector('#cityInput');
const cities = document.querySelector('#cities');

cityInput.addEventListener('keyup', async (e) => {
  try {
    const response = await fetch(`/reg/${e.target.value}`);
    const result = await response.json();
    let options = '';
    for (let i = 1; i < result.length; i++) {
      options += `<option value="${result[i].name}" />`;
    }
    cities.innerHTML = options;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
