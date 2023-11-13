const express = require('express');

const router = express.Router();

router.get( '/add-product', (req, res, next) => {
    res.send(`<form action="/admins/add-product" method="POST">
    <input type="text" name="product" placeholder="product" >
    <input type="text" name="size" placeholder="size">
    <button type="submit">Add Product</button>
    </form>`)
});

router.post('/add-product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router