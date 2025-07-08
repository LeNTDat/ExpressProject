const fs = require('fs');

const path = require('path');
const rootDir = require('../utils/path');
let p = path.join(rootDir, 'data', 'cart.json').toString();

class Cart {
    static addProduct (id, productPrice){
        fs.readFile(p,(err, content)=>{
            let cart = {products : [], totalPrice : 0};
            
            if(!err){
                cart = JSON.parse(content);
            }

            const existingProductIndex = cart.products.findIndex(item=>item.id === id)
            const existingProduct = cart.products[existingProductIndex];
            let updateProduct;
            if(existingProduct){
                updateProduct = {...updateProduct};
                updateProduct.qty = updateProduct + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updateProduct;
            }else{
                updateProduct = {id : id, qty : 1};
                cart.products = [...cart.products, updateProduct]
            }
            cart.totalPrice += (+productPrice);
            cart.products = [...cart.products]
            console.log(JSON.stringify(cart));
            
            fs.writeFile(p, JSON.stringify(cart), (err)=>{
                console.log(err);
            })
        })

        //('{"products":[{"qty":1}],"...')
    }
}

module.exports = Cart;