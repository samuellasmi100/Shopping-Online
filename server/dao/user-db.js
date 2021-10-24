const db = require('./connection-wrapper');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

//Get All Users
const allUsers = async () => {
    let sql = 'SELECT * FROM users';

    try {
        return await db.execute(sql)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
    }
}

// Register
const register = async (user) => {
    
    const {userId, firstName, lastName, email, password,city,street } = user;

    const sql = 'INSERT INTO users(user_id,first_name,last_name,email,password,city,street) VALUES(?,?,?,?,?,?,?);';

    const parameters = [userId, firstName, lastName, email, password,city,street ];

    try {
        await db.executeWithParameters(sql, parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
    }
};

//Login
const login = async (email) => {
    let sql =`SELECT user_id as userId, role as admin,password,
    first_name as firstName,last_name as lastName,city,street,email FROM users WHERE email = ?;`

    let parameters = [email];

    try {
        const idUser = await db.executeWithParameters(sql, parameters);
        return idUser;
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

// Get Onec User
const getOneUser = async (user) => {
    let sql = 'SELECT * FROM users WHERE id = ?';

    const parameters = [user]
    try {
        return await db.executeWithParameters(sql, parameters)
    } catch (error) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}


//Validation Before Registration
const isUserExistByEmailOrId = async (email, userId) => {
    const sql = 'SELECT * FROM users Where email=? or user_id=?';

    const parameters = [email, userId];

    try {
        const user = await db.executeWithParameters(sql, parameters);
        if (user === null || user.length === 0) {
            return true
        } else {
           return new ServerError(ErrorType.USER_NAME_ALREADY_EXIST.message)
        }
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR,sql,e);
    };
};


module.exports = {
    register,
    isUserExistByEmailOrId,
    getOneUser,
    allUsers,
    login,
};