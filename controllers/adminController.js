const Product = require('../models/product')

const getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
        editting: false
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

const getEditProduct = (req, res) => {
    const editMode = req.query.edit === 'true';
    const id = req.params.productId;
    console.log("req.query", req.query);
    if(!editMode){
        return res.redirect('/');
    }
    Product.findById(id, (product)=>{
        if(!product){
            return res.redirect('/')
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editting : editMode,
            product: product
        })
    })
}

const onEditProduct = (req, res)=>{
    const body = req.body;
    console.log("body", body);
    
    const updatedProduct = {
        "title": body.title,
        "imageUrl": body.imageUrl,
        "description": body.description,
        "price": body.price,
        "id": body.productId 
    }
    const product = new Product();
    product.edit(updatedProduct);
    return res.redirect('/')
}

const getProducts = (req, res) => {
    Product.fetchAll((allProduct) => {
        res.render('admin/products', {
            prods: allProduct,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    });
}

module.exports = {
    getAddProduct,
    onAddProducts,
    getProducts,
    getEditProduct,
    onEditProduct
}