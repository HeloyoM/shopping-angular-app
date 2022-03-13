const express = require("express");
const server = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;

const usersController = require("./controllers/usersController");
const productsController = require("./controllers/productsController");
const cartController = require("./controllers/cartController");
const orderController = require('./controllers/ordersController');
const errorHandler = require("./errorHandler/ErrorHandler");

process.env.NODE_ENV = "production";
if (process.env.NODE_ENV = "production") {
    server.use(express.static('./dist/shopping-online'));
}
else {
    const corsOptions = {
        origin: ["http://localhost:4200", "https://serene-springs-23568.herokuapp.com"],
        credentials: true
    }
    server.use(cors(corsOptions));

};

server.use(express.json());

server.use("/products", productsController);
server.use("/users", usersController);
server.use("/cart", cartController);
server.use("/orders", orderController);


server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'shopping-online/index.html'))
})

server.use(errorHandler);
server.listen(port, () => console.log("listening on ", port));