const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));
app.use(session({
    secret: 'X$#@GBUCN*&8',
}));

const products = [
    { id: 1, name: 'Laptop', description: "this is laptop", price: 1200},
    { id: 2, name: 'Car', description: "this is car", price: 15000},
    { id: 3, name: 'Refrigerator', description: "this is refrigrator", price: 500},
]

app.use((req, res, next) => {
    req.session.cart = req.session.cart || {};

    next();
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);

    const cart = req.session.cart;
    const quantity = (cart[id] && cart[id].quantity) || 0;
    res.render('product', {data: { product, quantity }});
});

app.get('/shoppingcart', (req, res) => {
    const cart = req.session.cart;
    res.render('shoppingcart', {data: { cart }});
});

app.post('/addToCart/:id', (req, res) => {
    const cart = req.session.cart;
    const id = req.params.id;
    const product = products.find(p => p.id == id);

    const quantity = ((cart[id] && cart[id].quantity) || 0) + 1;
    cart[id] = {
        ...product,
        quantity, 
    };

    req.session.cart = cart;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ quantity }));
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});