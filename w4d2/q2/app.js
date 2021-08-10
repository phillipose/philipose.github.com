const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')))

app.get('/', (req, res) => {
    res.render('index');
});


const list = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
app.post('/8ball', (req, res) => {
    const { question } = JSON.parse(req.body.data);
    const randomAnswer = list[Math.floor(Math.random() * list.length)];
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ answer: randomAnswer }));
});

app.listen(3000, () => {
    console.log('application started at 3000');
});