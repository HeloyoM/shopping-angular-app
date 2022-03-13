const express = require("express");
const router = express.Router();
const ordersLogic = require("../logic/ordersLogic");
const jwtDecode = require("jwt-decode");

router.post("", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    const city = decode.findUser[0].city;
    const address = decode.findUser[0].address;
    let date = new Date();
    date = date + 172800000;

    const order = {
        userId: userId,
        totalPrice: request.body.order.totalPrice,
        targetCity: city,
        street: address,
        orderDate: date,
        deliveryDate: date + 172800000
    }
    let newOrder;
    try {
        newOrder = await ordersLogic.addOrder(order);
        response.json(newOrder)
    } catch (e) {
        response.json(e)
    }
});

module.exports = router;