const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');
const ejs = require('ejs');
const app  = express();
const errorsController = require('./controllers/errors');

app.set('view engine', 'ejs');
app.set('views', 'views');

const sequelize =  require('./utils/database');

const adminRoutes = require('./routes/admin');
const shopRountes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRountes);

app.use(errorsController.onNotFoundPage);

sequelize.sync().then((result)=>{
    app.listen(8000);
}).catch(err=>console.log(err));
