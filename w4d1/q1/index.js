const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(cookieParser('X$#@GBUCN*&8'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use('/assets/', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/addCookie', (req, res) => {
    const { key, value } = req.body;
    console.log(key, value);
    res.cookie(key, value, {maxAge: 1000*60*60*24, signed: true});
    res.redirect('back');
});

app.listen(3000, (req, send) => { console.log("server is runing.. on port 3000") }); 