let connection = require("../dao/connection-wrapper");
const ServerError = require("../errorHandler/serverError");
const ErrorType = require('../errorHandler/ErrorType');

async function addItem(item, userId) {
    let cartId; //setup;
    let sql = `SELECT cartId FROM cart WHERE userId=?`;
    let parameters = [userId];
    let getUserCartId = await connection.executeWithParameters(sql, parameters);
    if (getUserCartId.length > 0) {
        cartId = getUserCartId[0].cartId;
        sql = `INSERT INTO cart_item (productId, amount, totalPrice, cartId) VALUES (?,?,?,?)`;
        parameters = [item.productId, item.amount, item.totalPrice, cartId]
        const pushItem = await connection.executeWithParameters(sql, parameters);
        return pushItem;
    } else {
        const today = new Date();
        sql = `INSERT INTO cart (userId, productionDate) VALUES (?,?)`;
        parameters = [userId, today];
        const addNewCart = await connection.executeWithParameters(sql, parameters);
        sql = `SELECT cartId FROM cart WHERE userId=?`;
        parameters = [userId];
        getUserCartId = await connection.executeWithParameters(sql, parameters);
        cartId = getUserCartId[0].cartId;
        sql = `INSERT INTO cart_item (productId, amount, totalPrice, cartId) VALUES (?,?,?,?)`;
        parameters = [item.productId, item.amount, item.totalPrice, cartId]
        const pushItem = await connection.executeWithParameters(sql, parameters);
        return pushItem;
    }
};

async function removeItem(id, userId) {
    let sql = `SELECT cartId FROM cart WHERE userId=?`;
    let parameters = [userId];
    const getCartId = await connection.executeWithParameters(sql, parameters);
    const cartId = getCartId[0].cartId;
    sql = `DELETE FROM cart_item WHERE productId=? AND cartId=?`;
    parameters = [id, cartId];
    const itemToRemove = await connection.executeWithParameters(sql, parameters);
    return itemToRemove;
};

async function deleteCart(userId) {
    let sql = `SELECT cartId FROM cart WHERE userId=?`;
    let parameters = [userId];
    const getUserCartId = await connection.executeWithParameters(sql, parameters);
    const cartId = getUserCartId[0].cartId;
    sql = `SELECT * FROM cart_item WHERE cartId=?`;
    parameters = [cartId];
    const checkForItems = await connection.executeWithParameters(sql, parameters);
    if (checkForItems.length) {
        sql = `DELETE FROM cart_item WHERE cartId=?`;
        parameters = [cartId];
        const removeAllItems = await connection.executeWithParameters(sql, parameters);
    }

    sql = `DELETE FROM cart where userId=?`;
    parameters = [userId];
    const removeCart = await connection.executeWithParameters(sql, parameters);
    return removeCart;
};

async function getUserProducts(userId) {
    let sql = `SELECT cartId FROM cart WHERE userId=?`
    let parameters = [userId];
    const getUserCartId = await connection.executeWithParameters(sql, parameters);
    if (!getUserCartId.length) {
        throw new ServerError(ErrorType.CART_IS_EMPTY.message)
    } else {
        const cartId = getUserCartId[0].cartId;
        sql = `
        SELECT ci.itemId, ci.amount, ci. totalPrice, pro.name, pro.image, pro.price, pro.productId
            FROM cart_item ci 
                JOIN products pro
            ON pro.productId = ci.productId
                WHERE ci.cartId=?`;
        parameters = [cartId];
        const userProducts = await connection.executeWithParameters(sql, parameters);
        return userProducts;
    }
};

async function updateProduct(id, item) {
    let sql = `UPDATE cart_item SET amount =?, totalPrice =? WHERE productId=?`;
    let parameters = [item.amount, item.totalPrice, id];
    const updateItem = await connection.executeWithParameters(sql, parameters);
    return updateItem;
}
module.exports = {
    addItem,
    deleteCart,
    getUserProducts,
    removeItem,
    updateProduct
};