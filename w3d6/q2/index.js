const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    const name = req.body.name || 'Person';
    const age = req.body.age || 40;

    res.render('result', {data: { name, age }});
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});