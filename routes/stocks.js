const express = require('express');
const stocks = require('../data/data');
const router = express.Router();
const redis = require('redis');
const redisClient = redis.createClient();

router.get('/', (req, res) => {
    res.json(stocks);
});

router.get('/:id', (req, res) => {
    const stockId = Number.parseInt(req.params.id, 10);
    const stock = stocks.find(
        (stock) => stock.id === stockId
    );
    /*redisClient.get(stock, async (error, data) => {
        if (error) {
            res.json({
            message: 'Something went wrong!',
            error
            });
        }else{
            return res.json(JSON.parse(data));
        }
        res.json(stock);
    });*/
    res.json(stock);
});

router.post('/', (req, res) => {
    currentStockId += 1;
    const newStock = {
        id: currentstockId,
        ...req.body
    }
    stocks.push(newstock);
    res.json(newstock);
});

router.put('/:id', (req, res) => {
    const stockId = Number.parseInt(req.params.id, 10);
    const stockIndex = stocks.findIndex(
        (stock) => stock.id === stockId
    );

    const updatedStock = {
        id: stockId,
        ...req.body
    };
    stocks[stockIndex] = updatedStock;
    res.send(updatedStock);
});

router.delete('/:id', (req, res) => {
    const stockId = Number.parseInt(req.params.id, 10);
    const stockIndex = stocks.findIndex(
        (stock) => stock.id === stockId
    );
    stocks.splice(stockIndex, 1);
    res.sendStatus(204);
});

module.exports = router;