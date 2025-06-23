const express = require('express');

const bodyParser = require('body-parser')

const app  = express();

app.use(bodyParser.urlencoded());

app.use('/add-product',(req, res, next)=>{
    console.log("In another 1 middleware");
    res.send(`<form action="/product" method="POST">
        <input type="text" name="title">
            <button type="submit">
                Add product
            </button>
        </input>
    </form>`);
});

app.use('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req, res, next)=>{
    console.log("In another 2 middleware");
    res.send('<h1>Hello</h1>')
});

app.listen(8000);