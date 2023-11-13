const express = require('express');

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : false}));

app.use( '/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
    <input type="text" name="product" placeholder="product" >
    <input type="text" name="size" placeholder="size">
    <button type="submit">Add Product</button>
    </form>`)
});

app.use('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    res.send('<h1> Hello from Express ! <h1>');
});

app.listen(3000);