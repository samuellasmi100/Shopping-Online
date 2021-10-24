const db = require('./connection-wrapper');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

// get all products in cart
const getAllProductsInCart = async (cartId) => {
    
    const sql = `SELECT p.id as productId,p.product_name as productName,p.price,p.image FROM products p 
    join cart_item ci on ci.product_id = p.id 
    where cart_id = ?;`

    const parameters = [cartId]
    try {
        return await db.executeWithParameters(sql,parameters)
     } catch (e) {
         throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
     }  
}
//get one product
const getOneProduct = async (cartId,productId) => {
   
    const sql = 'SELECT * FROM cart_item where cart_id = ? and product_id = ?'
    const parameters = [cartId,productId];

    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
}
//ad product to cart
const addProductsToCart = async (productDetails,cartId) => {
    const {amount,productId,price} = productDetails
    const sql = 'INSERT into cart_item (amount,product_id,price,cart_id) VALUES (?,?,?,?);'
    const parameters = [amount,productId,price,cartId];

    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};

//delete one product
const deleteProductFromCart = async (productId,cartId) => {
    
    const sql = 'delete FROM super_market.cart_item where product_id = ? And cart_id = ?;'
    const parameters = [productId,cartId];

    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};

//delete all products in cart item 
const clearCart = async (cartId) => {
    const sql = 'delete FROM cart_item WHERE cart_id = ?';
    const parameters = [cartId];

    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};
//get sum of al products in cart 
const sumOfProductsInCart= async (cartId) => {
    const sql = 'SELECT sum(price) as sumOfPrice FROM cart_item where cart_id = ? ';
    const parameters = [cartId];

    try {
        const sumOfProductsInItem = await db.executeWithParameters(sql,parameters)
        return sumOfProductsInItem[0]
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};


module.exports = {
    getAllProductsInCart,
    deleteProductFromCart,
    clearCart,
    addProductsToCart,
    getOneProduct,
    sumOfProductsInCart,
}
