const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app  = express();

const adminRoutes = require('./routes/admin');
const shopRountes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRountes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(8000);