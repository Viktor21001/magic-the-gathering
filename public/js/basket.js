/* eslint-disable no-param-reassign */
document.addEventListener('DOMContentLoaded', () => {
  const basketContainerDel = document.querySelector('.basketContainer');
  // console.log(basketContainerDel);

  basketContainerDel.addEventListener('click', async (event) => {
    // console.log('Ghbdtnd!!!>>>>>!!!!');
    // console.log(event.target);
    if (event.target.classList.contains('card-delete')) {
      const { id } = event.target.closest('.card-details');
      console.log('====>>>>>',id);
      const idNum = parseInt(id.match(/\d+/)[0], 10);
      // try {
      //   const response = await fetch(`/basket/${idNum}`, {
      //     method: 'DELETE',
      //   });
      //   if (response.status === 200) {
      //     const result = await response.json();
      //     if (result.msg) {
      //       event.target.closest('.card-details').remove();
      //     }
      //     if (result.err) {
      //       console.log(result.err);
      //     }
      //   } else {
      //     console.log('что-то не так....!.');
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }

    // if (event.target.classList.contains('company-favorite')) {
    //   // console.log('уууу')
    // }
  });
});
