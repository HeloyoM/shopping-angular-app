const cartDao = require("../dao/cartDao");

async function addItem(item, userId) {
    const newItem = await cartDao.addItem(item, userId);
    return newItem;
}
async function deleteCart(userId) {
    const removeCart = await cartDao.deleteCart(userId);
    return removeCart;
}
async function removeItem(id, userId) {
    const itemToRemove = await cartDao.removeItem(id, userId);
    return itemToRemove;
}
async function getUserProducts(userId) {
    const userProducts = await cartDao.getUserProducts(userId);
    return userProducts;
}
async function updateProduct(id, item) {
    const updateItem = await cartDao.updateProduct(id, item);
    return updateItem;
}
module.exports = {
    addItem,
    deleteCart,
    removeItem,
    getUserProducts,
    updateProduct,
};