const form = document.querySelector('#loginForm');
const regMsg = document.querySelector('.regMsg');

console.log('Скрипт');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    if (result.notFound) {
      regMsg.innerText = 'Пользователь не найден';
    }
    if (result.errPass) {
      regMsg.innerText = 'Неверный пароль';
    }
    if (result.logDone) {
      regMsg.innerText = 'Пользователь вернулся';
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  } catch (error) {
    console.log('Ошибка:', error);
  }
});
