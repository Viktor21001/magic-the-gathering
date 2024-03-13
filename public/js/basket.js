/* eslint-disable no-param-reassign */
const orderCardWrapper = document.querySelector('.card-wrapper');

if (orderCardWrapper) {
  orderCardWrapper.addEventListener('click', async (event) => {
    if (event.target.classList.contains('order-button')) {
      const itemQuantitySpan = event.target.closest('.card').querySelector('.item-quantity');
      const { id } = event.target.dataset;
      try {
        const response = await fetch(`/order/${id}`, {
          method: 'POST',
        });
        if (response.status === 200) {
          const { err, msg } = await response.json();
          if (msg) {
            console.log(msg);
            event.target.innerText = msg;
            // event.target.closest('.card').remove();
          }
          if (err) {
            event.target.innerText = err;
            event.target.disabled = true;
            if (err === 'Товар закончился!') {
              setTimeout(() => {
                event.target.closest('.card').remove();
              }, 1000);
            }
          }
        } else {
          console.log('Все упало...');
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
}
