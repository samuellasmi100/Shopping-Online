const ordersDb = require('../dao/orders-db');
const cartitemDb = require('../dao/cartItem-db')
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

//Get last order of customers
const getLastOrdersByUserId = async (userId) => {
      return await ordersDb.getLastOrdersByUserId(userId);
};

//add new order
const addNewOrder = async (userId,cartId,orderDetails) => {

    await validateNewOrderDetails(orderDetails)
    
    //cut CreditCart Numbers And Save OnlyT heLast For numbers for security 
    const convertToString = orderDetails.creditCard.toString()
    const payment = convertToString.substr(convertToString.length - 4);

     orderDetails.creditCard = payment
    
     const finalPrice = await cartitemDb.sumOfProductsInCart(cartId)
     await ordersDb.addNewOrder(userId,cartId,orderDetails,finalPrice)
}; 


//get invalid dates to order 
const getInvalidDates = async () => {

   return await ordersDb.getInvalidDates()
};

const validateNewOrderDetails = async (orderDetails) => {

      if (orderDetails.city === "" || orderDetails.city == null) {
            throw new ServerError(ErrorType.CITY_VALIDATE);
        };

        if (orderDetails.street === "" || orderDetails.street == null) {
            throw new ServerError(ErrorType.STREET_VALIDATE);
        };

        if (orderDetails.shippingDate === "" || orderDetails.shippingDate == null) {
            throw new ServerError(ErrorType.SHIPPING_DATE);
        };

        if (orderDetails.creditCard === "" || orderDetails.creditCard == null) {
            throw new ServerError(ErrorType.CREDIT_CARD);
        };

        if (!isCreditCardValid(orderDetails.creditCard)) {
            throw new ServerError(ErrorType.CREDIT_CARD_NOT_VALIDAT)
        }

}

//Helping function to check if creditCard is Valid
const isCreditCardValid = (creditCard) => {
      const re =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      return re.test(String(creditCard).toLowerCase());
  };

module.exports = {
      getLastOrdersByUserId,
      addNewOrder,
      getInvalidDates
}