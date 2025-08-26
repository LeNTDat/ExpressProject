const Cart = require('../models/cart');
const db = require('../utils/database');


class Product {
    constructor(id ,input, imageUrl, description, price) {
        this.id = id
        this.title = input
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    save() {
        console.log("this.price", this.price);
        
        return db.execute(
            'INSERT INTO products (title, description, price, imageUrl) VALUES (?, ?, ?, ?)',
            [this.title, this.description, this.price, this.imageUrl]
        )
    }

    edit(updatedProduct){
        
    }

    static delete(id){
        
    }

    static fetchAll() {
       return db.execute('SELECT * FROM products');
    }


    static findById(id) {
        
    }
}

module.exports = Product;
