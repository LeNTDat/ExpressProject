const express = require('express');

const path = require('path');

const rootDir = require('../utils/path');
const { title } = require('process');

const router = express.Router();
const productController = require('../controllers/products')

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.onAddProducts)


module.exports = router;