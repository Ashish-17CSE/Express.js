const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const helpRoutes = require('./routes/help.js')

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'style')))

app.use('/admins', adminRoutes);
app.use(shopRoutes)
app.use('/contactust', helpRoutes);
 
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
