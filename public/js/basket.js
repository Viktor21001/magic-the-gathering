const orderCardWrapper = document.querySelector('.card-wrapper');

if (orderCardWrapper) {
  orderCardWrapper.addEventListener('click', async (event) => {
    if (event.target.classList.contains('order-button')) {
      const { id } = event.target.dataset;

      try {
        const response = await fetch(`/order/${id}`, { method: 'POST' });

        if (response.status === 401) {
          window.location.href = '/'; // Перенаправление на главную страницу
        } else if (response.ok) {
          const { err, msg } = await response.json();

          if (msg) {
            console.log(msg);
            event.target.innerText = msg;
          }

          if (err) {
            event.target.innerText = err;
            event.target.disabled = true;
            if (err === 'Товар закончился!') {
              setTimeout(() => event.target.closest('.card').remove(), 1000);
            }
          }
        } else {
          console.log('Ошибка запроса...');
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
}
