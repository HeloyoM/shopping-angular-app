let connection = require("../dao/connection-wrapper");

async function login(user) {
    let sql = `SELECT * FROM users WHERE username=? AND password=?`;
    let parameters = [user.username, user.password];
    let usersLoginResult = await connection.executeWithParameters(sql, parameters);
    return usersLoginResult[0];
};
async function addUser(user) {
    let sql = `INSERT INTO users (username, email, password, firstName, lastName, city, address, role, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let parameters = [user.username, user.email, user.password, user.firstName, user.lastName, user.city, user.address, user.role, user.phone];
    const newUser = await connection.executeWithParameters(sql, parameters);
    console.log(newUser)
    return newUser;
}
async function checkUsernameInput(username) {
    let sql = `SELECT username FROM users WHERE username=?`;
    let parameters = [username];
    const findUsername = await connection.executeWithParameters(sql, parameters);
    return findUsername;
}
async function checkEmail(email) {
    let sql = `SELECT email FROM users WHERE email=?`;
    let parameters = [email];
    const checkEmail = await connection.executeWithParameters(sql, parameters);
    return checkEmail;
}
async function getUser(userId) {
    let sql = `SELECT * FROM  users WHERE userId=?`;
    let parameters = [userId];
    userDetails = await connection.executeWithParameters(sql, parameters);
    return userDetails;
};

async function update(user, userId) {
    console.log(user)
    let sql = `UPDATE users SET city =?,address =? WHERE userId=?`;
    let parameters = [user.city, user.address, userId];
    const updateUserLocationDetailes = connection.executeWithParameters(sql, parameters);
    return updateUserLocationDetailes;
};
async function updateDetails(user, userId) {
    let sql = `UPDATE users SET username=?,email=?, phone=? WHERE userId=?`;
    let parameters = [user.username, user.email, user.phone, userId];
    const update = await connection.executeWithParameters(sql, parameters);
    return update;
}
module.exports = {
    login,
    updateDetails,
    update,
    addUser,
    getUser,
    checkUsernameInput,
    checkEmail
};