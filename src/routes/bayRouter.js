/* eslint-disable no-await-in-loop */
const router = require('express').Router();

const { User, Card, Basket } = require('../../db/models');

// const renderTemplate = require('../lib/renderTemplate');

router.delete('/', async (req, res) => {
  try {
    const { userId } = req.session;
    // const { id } = req.params;
    // const { login, userId } = req.session;
  try {
    const basketRaw = await Basket.findAll({
      where: { userId },
      include: [
        {
          model: Card,
          attributes: ['cardName', 'cardPrice', 'wear', 'cardImg'],
          include: {
            model: User,
            attributes: ['email'],
          },
        },
      ],
    });
  
            await Basket.destroy( {where: { userId }});
    res.json(basketRaw)

    if (deleteAllCards) {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log('Ошибка удаления всех карточек', error);
    res.sendStatus(500);
  }
});
// router.delete('/basket', async (req, res) => {
//   const { userId } = req.session;
//   try {
//     const basketRaw = await Basket.findAll({
//       where: { userId },
//     });

//     const baskets = basketRaw.map((bask) => bask.get({ plain: true }));

//     // eslint-disable-next-line no-restricted-syntax
//     for (const basket of baskets) {
//       await basket.destroy();
//     }
//     res.status(200).json({ msg: 'Все корзины пользователя успешно удалены' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ err: 'Внутренняя ошибка сервера!' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const cardDelete = await Card.destroy({
//       where: {
//         id,
//       },
//     });
//     if (cardDelete) {
//       res.sendStatus(200);
//     }
//   } catch (error) {
//     console.log('Ошибка удаления карточки', error);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
