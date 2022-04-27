const path = require('path');
const express = require('express');

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const   adminData = require('./routes/admin'),
        shopRoutes = require('./routes/shop'),
        rootDir = require('./helpers/path');

app.engine('hbs', exphbs.engine({ 
    extname: 'hbs',
    defaultLayout: 'main',
    layoutDir: path.join(__dirname, 'views/layouts'),
    partialsDir : path.join(__dirname, 'views/partials'),
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(3000);
