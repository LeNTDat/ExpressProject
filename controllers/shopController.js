const Product = require('../models/product');
const Cart = require('../models/cart');

const getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([products, fieldData])=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err=>console.log(err))
};

const getIndex = (req, res, next) => {
  Product.fetchAll().then(([products, fieldData])=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=>console.log(err))
};

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

const getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

const getProduct = (req, res, next)=>{
  const productId = req.params.productId;
  Product.findById(productId, (product)=>{
    return res.render('shop/product-detail',{
      path: '/products',
      product,
    })
  })
}

const postCart = (req, res, next)=>{
  const selectedId = req.params.productId;
  Product.findById(selectedId,(product)=>{
    Cart.addProduct(selectedId, product.price);
  })
  res.redirect('/cart')
}

module.exports ={
    getIndex,
    getProducts,
    getCart,
    getOrders,
    getCheckout,
    getProduct,
    postCart
}