const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('product', {
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false, 
        primaryKey: true
    },
    title : Sequelize.STRING,
    price : {
        type : Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type : Sequelize.STRING,
        allowNullL: false
    },
    description: {
        type : Sequelize.STRING,
        allowNullL: false
    }
})

module.exports = Product;













































// const Cart = require('../models/cart');
// const db = require('../utils/database');


// class Product {
//     constructor(id ,input, imageUrl, description, price) {
//         this.id = id
//         this.title = input
//         this.imageUrl = imageUrl
//         this.description = description
//         this.price = price
//     }

//     save() {
//         return db.execute(
//             'INSERT INTO products (title, description, price, imageUrl) VALUES (?, ?, ?, ?)',
//             [this.title, this.description, this.price, this.imageUrl]
//         )
//     }

//     edit(updatedProduct){
        
//     }

//     static delete(id){
        
//     }

//     static fetchAll() {
//        return db.execute('SELECT * FROM products');
//     }


//     static findById(id) {
//         return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
//     }
// }

// module.exports = Product;
