const usersDao = require("../dao/usersDao");
const connection = require("../dao/connection-wrapper");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../secret.json');
const ErrorType = require('../errorHandler/ErrorType');
const ServerError = require('../errorHandler/serverError');

async function login(user) {
    const findUser = await connection.executeWithParameters(`SELECT * FROM users WHERE username=?`, [user.username]);
    if (!findUser.length) {
        throw new Error("username dont show on system !");
    } else if (!await bcrypt.compare(user.password, findUser[0].password)) {
        throw new ServerError(ErrorType.UNAUTHORIZED.message)
    } else {
        await usersDao.login(user);
        const token = jwt.sign({ findUser }, config.secret);
        return token;
    }
};
async function checkUsernameInput(username) {
    const findUsername = await usersDao.checkUsernameInput(username);
    if (findUsername.length) {
        throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST.message)
    } else {
        return findUsername;
    }
};
async function checkEmail(email) {
    const checkEmail = await usersDao.checkEmail(email);
    if (checkEmail.length) {
        throw new ServerError(ErrorType.EMAIL_ADDRESS_ALLREADY_EXIST.message)
    } else {
        return checkEmail;
    }
}
async function addUser(user) {
    const newUser = await usersDao.addUser(user);
    return newUser;
};
async function getUser(userId) {
    userDetails = await usersDao.getUser(userId);
    return userDetails;
};
async function update(user, userId) {
    const updateUserLocationDetailes = await usersDao.update(user, userId);
    return updateUserLocationDetailes;
};
async function updateDetails(user, userId) {
    const update = await usersDao.updateDetails(user, userId);
    return update;
}
module.exports = {
    login,
    updateDetails,
    update,
    addUser,
    checkUsernameInput,
    checkEmail,
    getUser,
};