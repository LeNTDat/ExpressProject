const Product = require('../models/product')

const getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
        editting: false,
        product:[]
    })
}

const onAddProducts = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null ,title, imageUrl, description, price);
    product
    .save()
    .then(()=>{
        res.redirect('/')
    })
    .catch(err=>console.log(err));
}

const getEditProduct = (req, res) => {
    const editMode = req.query.edit === 'true';
    const id = req.params.productId;
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

const onDeleteProduct = (req, res)=>{
    const selectedId = req.body.productId;
    Product.delete(selectedId)    
    return res.redirect('/admin/products')
}

const getProducts = (req, res) => {
    Product.fetchAll().then(([products, fieldData]) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    }).catch(err => console.log(err))
}

module.exports = {
    getAddProduct,
    onAddProducts,
    getProducts,
    getEditProduct,
    onEditProduct,
    onDeleteProduct
}