const express = require('express');

const rootDir = require('../utils/path')

const path = require('path');

const adminData = require('./admin');

const productController = require('../controllers/products');
const router = express.Router();

router.get('/', productController.getProducts)

module.exports = router;