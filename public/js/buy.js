// const { transporterDel, mailOptionsDel } = require('./mailer');

// import { transporterDel, mailOptionsDel } from './mailer';

const cardBayBtn = document.querySelector('.btn-card-bay');
const basketcont = document.querySelector('.basketContainer');

console.log(cardBayBtn);
console.log(basketcont);

cardBayBtn.addEventListener('click', async () => {
  console.log('привет');
  try {
    const response = await fetch('/basket', {
      method: 'DELETE',
    });
    if (response.ok) {
      const result = await response.json();
      // console.log('🚀 ~ ', card.Card.User.email);

      // let emails = [];
      // result.forEach((card) => {
      //   emails.push(card.Card.User.email);
      // });
      // console.log("🚀 ~ cardBayBtn.addEventListener ~ emails:", emails)

      // basketcont.remove();
      basketcont.innerHTML = 'Спасибо за покупку!';
      cardBayBtn.innerHTML = 'Корзина пустая ';
      basketcont.className = 'basketText';
    }
  } catch (error) {
    console.log(error);
  }
});
