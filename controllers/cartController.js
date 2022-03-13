const express = require("express");
const router = express.Router();
const cartLogic = require("../logic/cartLogic");
const jwtDecode = require("jwt-decode");

router.post("", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    const item = request.body.item;
    let addItem;
    try {
        addItem = await cartLogic.addItem(item, userId);
        response.json(addItem)
    } catch (e) {
        response.json(e)
    }
});

router.get("/products", async(request, response) => {
    const token = request.headers.authorization;

    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    try {
        let userProducts = await cartLogic.getUserProducts(userId);
        response.json(userProducts)
    } catch (e) {
        response.json(e)
    }
});

router.delete("/products/:id", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    const id = request.params.id;
    try {
        let removeItem = cartLogic.removeItem(id, userId);
        response.json(removeItem)
    } catch (e) {
        response.json(e)
    }
});

router.delete("", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    try {
        const deleteCart = await cartLogic.deleteCart(userId);
        response.json(deleteCart)
    } catch (e) {
        response.json(e)
    }
})

router.put("/products/:id", async(request, response) => {
    const id = request.params.id;
    const item = request.body.item;
    try {
        const updateItem = await cartLogic.updateProduct(id, item);
        response.json(updateItem)
    } catch (e) {
        response.json(e)
    }
})
module.exports = router;