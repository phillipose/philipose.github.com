const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'css')));

const currentHour = new Date().getHours();
const isDay = currentHour >= 6 && currentHour <= 18;

app.get('/', (req, res) => {
    res.render('index', {data: { time: new Date().toTimeString(), isDay }});
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});