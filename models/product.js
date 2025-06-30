const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
let p = path.join(rootDir, 'data', 'product.json').toString();

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (!err && fileContent) {
            cb(JSON.parse(fileContent));
        }else{
            cb([])
        }
    })
}

class Product {
    constructor(input) {
        this.title = input
    }

    save() {
        getProductsFromFile((products)=>{
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log("save", err);
            })
        })
    }

    static fetchAll(callBack) {
        getProductsFromFile(callBack)
    }
}

module.exports = Product;
