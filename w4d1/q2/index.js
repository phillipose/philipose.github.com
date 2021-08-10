const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({
    secret: 'X$#@GBUCN*&8',
}));

const currentHour = new Date().getHours();
const isDay = currentHour >= 6 && currentHour <= 18;

app.get('/', (req, res) => {
    res.render('index', {data: { isDay }});
});

app.get('/output', (req, res) => {
    const q = req.session;
    res.send(`Welcome ${q.name}, age: ${q.age}`);
});

app.post('/result', (req, res) => {
    const name = req.body.name || 'Person';
    const age = req.body.age || 40;

    req.session.name = name;
    req.session.age = age;
    res.redirect(303, `/output`);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});