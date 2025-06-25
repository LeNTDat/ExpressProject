const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: '404',
    layoutsDir:'views'
})
const app  = express();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRountes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes.router);
app.use(shopRountes);

app.use((req, res, next)=>{
    res.status(404).render('404', {title: "Page Not Found"})
})


app.listen(8000);