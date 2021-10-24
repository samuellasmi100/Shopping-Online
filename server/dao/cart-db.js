const db = require('./connection-wrapper');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

//get user cart  
const getUserCart = async (userId) => {
    const sql = 'SELECT id as cartId,user_id as userId,status_cart as statusCart FROM carts where user_id = ?;';
    const parameters = [userId];

    try {
        const userCart = await db.executeWithParameters(sql,parameters)
        const recentCart = userCart[userCart.length - 1]
        return recentCart
        
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};
//create cart
const createCart = async (userId,createCartDate) => {
    const sql = 'INSERT INTO carts (user_id,create_cart_date) VALUES (?,?);'
    const parameters = [userId,createCartDate];

    try {
        const cartId =  await db.executeWithParameters(sql,parameters)
        return cartId
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};
//delete cart
const deleteCart = async (cartId) => {
    const sql = 'delete * FROM carts WHERE id = ?';
    const parameters = [cartId];

    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};

const changeCartStatus = async (cartId) => {
    const sql = 'update carts set status_cart = 0 where id = ?;'
    const parameters = [cartId]
    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
}
module.exports = {
    createCart,
    deleteCart,
    getUserCart,
    changeCartStatus
}