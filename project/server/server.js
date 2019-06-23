const express = require('express');
const fs = require('fs');
const cart = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);

app.get('/api/catalogproducts', (req, res) => {
    fs.readFile('server/db/products_catalog.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});
app.get('/api/mainproducts', (req, res) => {
    fs.readFile('server/db/products_mainPage.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});
app.get('/api/similiarproducts', (req, res) => {
    fs.readFile('server/db/products_singlePage.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});
app.listen(3000, () => console.log('Listen on port 3000...'))