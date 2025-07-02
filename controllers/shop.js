const Product = require('../models/product');

const getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

const getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
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
    res.render('shop/product-detail',{
      path: '/products',
      product,
    })
  })
}

const postCart = (req, res, next)=>{
  const selectedId = req.params.productId;
  Product.findById(selectedId,(product)=>{
    res.render('shop/cart', {
      path: '/cart',
      product
    })
  })
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