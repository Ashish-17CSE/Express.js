
const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log("In The Middleware !");
    next();
})

app.use('/',(req, res, next) => {
    console.log("In another Middleware!");
    res.send('<h1> Hello from Express ! <h1>');
});

app.listen(3000);