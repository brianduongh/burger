// const orm = require('./orm');
// orm.update("burgers", "id = 5", function(results) {
//   console.log("sucess");
//   console.log(results);
// });

const burgerModel = require('../models/burger');

burgerModel.update("id = 6", function(results) {
  console.log(results);
});
