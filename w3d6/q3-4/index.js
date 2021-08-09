const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

const products = [
    { id: 1, name: 'Laptop', description: "this is laptop", price: 1200},
    { id: 3, name: 'Refrigerator', description: "this is refrigrator", price: 500},
]
app.get('/products', (req, res) => {
    res.render('product', {data: { products }});
});

app.get('/shoppingcart', (req, res) => {
    res.render('shoppingcart', {data: { products }});
});

app.post('/addToCart', (req, res) => {
    // TODO
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});
