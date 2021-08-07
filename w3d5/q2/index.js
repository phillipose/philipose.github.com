const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname});
});

app.post('/result', (req, res) => {
    console.log(req.body);
    const name = req.body.name || 'Person';
    const age = req.body.age || 40;

    res.send(`Welcome ${name}, age: ${age}`);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});