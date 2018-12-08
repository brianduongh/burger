const express = require('express');
const PORT = process.env.port || 3000;
const app = express();

// Serve static content
app.use(express.static('public'));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//
// app.get('/', function(req, res) {
//   res.render('index', []);
// })

// Import routes and gives server access
const routes = require('./controllers/burger_controller.js');

app.use(routes);

app.listen(PORT, () => {
  console.log('App listening to localhost: ' + PORT);
});
