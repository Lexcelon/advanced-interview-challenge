/**
 * Script to reset all tables auto increments.
 * This is useful when you are reseeding data. 
 * Some of the data expects a certain row ID which may not exist if the AI value is not reset.
 */
 require('custom-env').env(true, './config');
 const sequelize = require('../util/SequelizeManager');
 require('../models');
   
 async function task() {
   await sequelize.sync({ alter: true });
   
   process.exit(0);
 }
   
 task();