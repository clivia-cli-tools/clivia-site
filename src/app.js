const path = require('path');
const express = require('express');
const hbs = require('hbs');
const sass = require('node-sass');

const app = express();
const port = 3001;

// Setting up paths for Express and hbs
app.use(express.static(path.join(__dirname, '../public')));
hbs.registerPartials(path.join(__dirname, '../views/partials'));

// Using the handlebars view engine through hbs
app.set('view engine', 'hbs');

// Use sass middleware for preprocessing
const sassRender = (req, res, next) => {

  sassMiddleware({
    src: __dirname + '/sass/main.scss',
    dest: __dirname + '/public',
    debug: true,
  })
  next();
}

app.use(sassRender);

app.get('', (req, res) => {
  // Renders the hbs file in the views dir to html
  res.render('index', {
    title: "Home"
  });
})

app.get('/docs', (req, res) => {
  res.render('docs', {
    title: "Usage"
  });
})

// 404 page if nothing else matches
app.get('*', (req, res) => {
  res.render('404', {
    title: "404"
  })
});

// Listen
app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
