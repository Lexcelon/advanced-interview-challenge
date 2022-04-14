const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
  define: {
    freezeTableName: true, // Prevents Sequelize from pluralizing table names
    underscored: true // Follow mysql standards. This forces underscore storage, but retrieval/saving is all camalcase. Easy for us!
  }
});

async function test() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(0);
  }
}

test();

module.exports = sequelize;
