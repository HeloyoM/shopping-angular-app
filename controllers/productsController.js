const express = require("express");
const router = express.Router();
const productsLogic = require("../logic/productsLogic");

//get all products:
router.get("", async(request, response) => {
    try {
        let allProducts = await productsLogic.getAllProducts();
        response.json(allProducts);
    } catch (e) {
        response.json(e)
    }
});

//get one category of products: 
router.get("/:id", async(request, response) => {
    const id = request.params.id;
    let categoryProducts;
    try {
        categoryProducts = await productsLogic.getProductsByCategoryId(id);
        response.json(categoryProducts);
    } catch (e) {
        response.json(e);
    }
});

//Add new product to list by admin: 
router.post("", async(request, response) => {
    const product = request.body.product;
    let addProduct;
    try {
        addProduct = await productsLogic.addProduct(product);
        response.json(newProductAdded)
    } catch (e) {
        response.json(e)
    }
});


module.exports = router;