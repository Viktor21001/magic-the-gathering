const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize
      .authenticate()
      .then(() => console.info(`Database - ${sequelize.getDatabaseName()} - connected`));
  } catch (error) {
    console.log('DB ERROR =>>>', error.message);
  }
};
