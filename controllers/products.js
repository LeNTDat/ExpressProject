const Product = require('../models/product')

const getAddProduct = (req, res)=>{
    res.render('add-product', {title: "Add product"})
}

const onAddProducts = (req, res)=>{
    const productModel = new Product(req.body.title);
    productModel.save();
    res.redirect('/')
}

const getProducts = (req, res)=>{
    Product.fetchAll((allProduct)=>{
        res.render('shop', {prods : allProduct, docTitle : 'Shop'})
    });
}

module.exports = {
    getAddProduct,
    onAddProducts,
    getProducts
}