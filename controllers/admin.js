const Product = require('../models/product')

const getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

const onAddProducts = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/')
}

const getProducts = (req, res) => {
    Product.fetchAll((allProduct) => {
        res.render('shop/product', {
            prods: allProduct,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    });
}

module.exports = {
    getAddProduct,
    onAddProducts,
    getProducts
}