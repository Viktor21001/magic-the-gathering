const nodemailer = require('nodemailer');

const transporterDel = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rusfat16rus@gmail.com',
    pass: 'tavc sliw tezm lpqk',
  },
});

const mailOptionsDel = {
  from: 'rusfat16rus@gmail.com',
  to: 'rusfat16rus@gmail.com',
  subject: 'Покупка',
  text: 'Ваша карточка куплена пользователем',
};

transporterDel.sendMail(mailOptionsDel);

// export { transporterDel, mailOptionsDel };
module.exports = { transporterDel, mailOptionsDel };
