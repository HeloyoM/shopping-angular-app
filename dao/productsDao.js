const connection = require("../dao/connection-wrapper");

async function getAllProducts() {
    let sql = "SELECT * FROM products";
    let parameters = []
    let allProducts = await connection.executeWithParameters(sql, parameters);
    return allProducts;
};

async function getProductsByCategoryId(id) {
    let sql = `SELECT name, price, image, categoryId FROM products WHERE categoryId =?;`;
    let parameters = [id];
    const categoryProducts = await connection.executeWithParameters(sql, parameters);
    return categoryProducts;
}
async function addProduct(product) {
    let sql = `INSERT INTO products (name, categoryId, price, image) VALUES (?, ?, ?, ?)`;
    let parameters = [product.name, product.categoryId, product.price, product.image];
    const newProductAdded = await connection.executeWithParameters(sql, parameters);
    return newProductAdded;
}
module.exports = {
    getAllProducts,
    addProduct,
    getProductsByCategoryId
}