let ErrorType = {

    GENERAL_ERROR: {
        id: 1,
        httpCode: 600,
        message: "A big fuck up which we'll never tell you of had just happend. And now : A big fat lie....'A general error ....'",
        isShowStackTrace: true
    },
    USER_NAME_ALREADY_EXIST: {
        id: 2,
        httpCode: 601,
        message: "User name already exist on system, please select other username",
        isShowStackTrace: false
    },
    UNAUTHORIZED: {
        id: 3,
        httpCode: 401,
        message: "Login failed, invalid user name or password",
        isShowStackTrace: false
    },
    INVALID_USER_NAME: {
        id: 4,
        httpCode: 402,
        message: "User Name Do Not Exsist On Our System, Please Check You'r User Name",
        isShowStackTrace: false
    },
    INVALID_PASSWORD: {
        id: 5,
        httpCode: 403,
        message: "Cannot update/add user, please check your data .",
        isShowStackTrace: false
    },
    CART_IS_EMPTY: {
        id: 6,
        httpCode: 406,
        message: "Your cart is empty, start buying !",
        isShowStackTrace: false
    },
    EMAIL_ADDRESS_ALLREADY_EXIST: {
        id: 7,
        httpCode: 603,
        message: "email addrees allready register to system if you forgot you'r password click here",
        isShowStackTrace: false
    }
}

module.exports = ErrorType;