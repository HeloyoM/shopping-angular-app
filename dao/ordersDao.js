const connection = require("../dao/connection-wrapper");


async function addOrder(order) {
    let sql = `SELECT cartId FROM cart WHERE userId=?`;
    let parameters = [order.userId];
    const getUserCartId = await connection.executeWithParameters(sql, parameters);
    order.cartId = getUserCartId[0].cartId;
    sql = "INSERT INTO orders (userId, cartId, totalPrice, targetCity, street, orderDate, deliveryDate)VALUES (?,?,?,?,?,?,?)";
    parameters = [order.userId, order.cartId, order.totalPrice, order.targetCity, order.street, order.orderDate, order.deliveryDate];
    const newOrder = await connection.executeWithParameters(sql, parameters);
    return newOrder;
};
module.exports = {
    addOrder
}