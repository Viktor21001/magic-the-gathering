/* eslint-disable no-param-reassign */
document.addEventListener('DOMContentLoaded', () => {
  const cardBasketDelete = document.querySelector('.basketContainer');
  // console.log(cardBasketDelete);

  cardBasketDelete.addEventListener('click', async (event) => {
    // console.log('Ghbdtnd!!!>>>>>!!!!');
    // console.log('Ghbdtnd!!!>>>>>!!!!',  event.target);

    if (event.target.classList.contains('card-basket-delete')) {
      const cardid = event.target.getAttribute('data-cardid');
      const basketid = event.target.getAttribute('data-basketid');
      // console.log('====>>>>>', event.target);
      // console.log('====>>>>>', id);

      // console.log('====>>>>>', id);
      // const idNum = parseInt(id.match(/\d+/)[0], 10);

      try {
        let response = await fetch(`/basket/${basketid}`, {
          method: 'DELETE',
        });
        if (response.status === 200) {
          const result = await response.json();
          if (result.msg) {
            event.target.closest('.oneCard').remove();
          }
          if (result.err) {
            console.log(result.err);
          }
        } else {
          console.log('что-то не так....!.');
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (event.target.classList.contains('company-favorite')) {
      // console.log('уууу')
    }
  });
});
