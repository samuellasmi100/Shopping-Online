const db = require('./connection-wrapper');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');
const cartDb = require('./cart-db')

const getLastOrdersByUserId = async (userId) => {
    
    const sql = `SELECT
    final_price As finalPrice,
    city_delivery AS city,
    street_delivery AS street,
    delivery_date AS deliveryDate, 
    order_date AS orderDate FROM orders WHERE user_id = ? ORDER BY order_date DESC;`          

   const parameters = [userId];
  
    try {
       const allOrders = await db.executeWithParameters(sql,parameters);
       const lastOrder = allOrders[0]
       return [lastOrder]
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
};

//add new ordeer
const addNewOrder = async (userId,cartId,orderDetails,finalPrice) => {
    console.log(finalPrice)
    const {city,street,shippingDate,creditCard} = orderDetails;

    const sql = 'INSERT INTO orders(user_id,cart_id,final_price,city_delivery,street_delivery,delivery_date,payment) VALUES(?,?,?,?,?,?,?);';

    const parameters = [userId,cartId,finalPrice.sumOfPrice,city,street,shippingDate,creditCard];

    try {
       await db.executeWithParameters(sql,parameters);
       await cartDb.changeCartStatus(cartId)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

//get the invalid dates order
const getInvalidDates = async () => {
   
    const sql = `SELECT count(delivery_date) as count, delivery_date as delivaryDate FROM orders GROUP BY delivery_date`
    try {
      const dates =  await db.executeWithParameters(sql);
      const forbiddenDates = dates.reduce((results, orderDate) => orderDate.count >= 3 ?[...results, orderDate.delivaryDate.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })] : results,[]);
      return forbiddenDates
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}
module.exports = {
    getLastOrdersByUserId,
    addNewOrder,
    getInvalidDates
}
