let productsDao = require("../dao/productsDao");

async function getAllProducts() {
    const allProducts = await productsDao.getAllProducts();
    return allProducts
};
async function getProductsByCategoryId(id) {
    const categoryProducts = await productsDao.getProductsByCategoryId(id);
    return categoryProducts;
}
async function addProduct(product) {
    const addProduct = await productsDao.addProduct(product);
    return addProduct;
}

module.exports = {
    getAllProducts,
    getProductsByCategoryId,
    addProduct
}