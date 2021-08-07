const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

const currentHour = new Date().getHours();
const isDay = currentHour >= 6 && currentHour <= 18;

app.get('/', (req, res) => {
    res.render('index', {data: { isDay }});
});

app.post('/result', (req, res) => {
    const name = req.body.name || 'Person';
    const age = req.body.age || 40;

    res.send(`Welcome ${name}, age: ${age}`);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});