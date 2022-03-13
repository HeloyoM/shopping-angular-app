const express = require("express");
const router = express.Router();
const usersLogic = require("../logic/usersLogic");
const bcrypt = require('bcryptjs');
const jwtDecode = require("jwt-decode");


router.post("/login", async(request, response) => {
    const user = {
        username: request.body.username,
        password: request.body.password,
    };
    let successfulLoginData;
    try {
        successfulLoginData = await usersLogic.login(user);
        response.json(successfulLoginData);
    } catch (e) {
        response.json(e)
    }
});

router.post("/", async(request, response) => {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = {
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        city: request.body.city,
        address: request.body.address,
        phone: request.body.phone,
        role: "user"
    };

    let newUser;
    try {
        newUser = await usersLogic.addUser(user);
        response.json(newUser);
    } catch (e) {
        response.json(e)
    }
});

//check username input if is allready exsist
router.post("/check", async(request, response) => {
    const username = request.body.username;
    let findUsername;
    try {
        findUsername = await usersLogic.checkUsernameInput(username);
        response.json(findUsername)
    } catch (e) {
        response.json(e)
    }
});

//check if email address allready exist on system;
router.post("/email", async(request, response) => {
    const email = request.body.email;
    let checkEmail;
    try {
        checkEmail = await usersLogic.checkEmail(email);
        response.json(checkEmail)
    } catch (e) {
        response.json(e);
    }
})

//get only one user details
router.get("/user", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    let userDetails;
    try {
        userDetails = await usersLogic.getUser(userId);
        response.json(userDetails)
    } catch (e) {
        response.json(e)
    }
});

//Update location user data;
router.put("", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    const user = request.body.user;
    try {
        let updateUserLocationDetailes = await usersLogic.update(user, userId);
        response.json(updateUserLocationDetailes)
    } catch (e) {
        response.json(e)
    }
});
//update other details;
router.put("/user", async(request, response) => {
    const token = request.headers.authorization;
    const decode = jwtDecode(token);
    const userId = decode.findUser[0].userId;
    const user = request.body.user;
    try {
        const update = await usersLogic.updateDetails(user, userId);
        response.json(update)
    } catch (e) {
        response.json(e)
    }
});
module.exports = router;