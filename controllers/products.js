const products = [];

const getAddProduct = (req, res)=>{
    res.render('add-product', {title: "Add product"})
}

const onAddProducts = (req, res)=>{
    products.push({title : req.body.title})
    res.redirect('/')
}

const getProducts = (req, res)=>{
    res.render('shop', {prods : products, docTitle : 'Shop'})
}

module.exports = {
    getAddProduct,
    onAddProducts,
    getProducts
}