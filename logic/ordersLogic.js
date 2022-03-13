let ordersDao = require("../dao/ordersDao");

async function addOrder(order) {
    const newOrder = await ordersDao.addOrder(order);
    return newOrder;
};

module.exports = {
    addOrder
}