/* eslint-disable no-param-reassign */

// document.addEventListener('DOMContentLoaded', () => {
//   const cardBasket = document.querySelector('.cardContainer');
//   // console.log(cardBasket);

//   cardBasket.addEventListener('click', async (event) => {
//     // console.log('Ghbdtnd!!!>>>>>!!!!');
//     // console.log('Ghbdtnd!!!>>>>>!!!!',  event.target);

//     if (event.target.classList.contains('buyBtn')) {
//       const id = event.target.getAttribute('data-card');
//       // console.log('====>>>>>', event.target);
//       console.log('====>>>>>', id);

//       // console.log('====>>>>>', id);
//       // const idNum = parseInt(id.match(/\d+/)[0], 10);

//       try {
//         const response = await fetch(`/basket/${id}`, {
//           method: 'POST',
//         });
//         if (response.status === 200) {
//           const result = await response.json();
//           if (result.msg) {
//             event.target.innerText = result.msg;
//             event.target.closest('.oneCard').remove();
//           }
//           if (result.err) {
//             console.log(result.err);
//           }
//         } else {
//           console.log('что-то не так....!.');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     if (event.target.classList.contains('company-favorite')) {
//       // console.log('уууу')
//     }
//   });
// });
