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

app.listen(PORT, () => {
  console.log('App listening to localhost: ' + PORT);
});
