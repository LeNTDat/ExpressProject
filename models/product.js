const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const Cart = require('../models/cart')
let p = path.join(rootDir, 'data', 'product.json').toString();

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (!err && fileContent) {
            cb(JSON.parse(fileContent));
        } else {
            cb([])
        }
    })
}

class Product {
    constructor(input, imageUrl, description, price) {
        this.title = input
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log("save", err);
            })
        })
    }

    edit(updatedProduct){
        getProductsFromFile((product)=>{
            let allProduct = [...product];
            const productIndex = product.findIndex(item=>item.id === updatedProduct.id);
            allProduct[productIndex] = updatedProduct;
            fs.writeFile(p, JSON.stringify(allProduct), (err)=>{
                console.log(err);
            })
        })
    }

    static delete(id){
        getProductsFromFile(product=>{
            let newProduct = [...product];

            newProduct = newProduct.filter(item=>item.id !== id);
            fs.writeFile(p, JSON.stringify(newProduct), err=>{
                console.log(err);
                if(!err){
                    Cart.deleteItem(id, product.price)
                }
            })
        })
    }

    static fetchAll(callBack) {
        getProductsFromFile(callBack)
    }


    static findById(id, callBack) {
        getProductsFromFile((products) => {
            const product = products.find(item => item.id === id);
            callBack(product)
        })
    }
}

module.exports = Product;
