const express = require('express');

// const path = require('path');

// const rootDir = require('../utils/path');
// const { title } = require('process');

const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts)

router.post('/add-product', adminController.onAddProducts)

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.onEditProduct);



module.exports = router;