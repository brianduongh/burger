const orm = require('./orm');
// const burgerModel = require('../models/burger');

orm.create("burger_name", "brianBurger", function(results) {
  console.log("sucess");
  console.log(results);
});

// burgerModel.update(function(results) {
//   console.log(results);
// });
