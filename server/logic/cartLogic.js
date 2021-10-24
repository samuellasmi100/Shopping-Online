const cartDb = require('../dao/cart-db')
const cacheModule = require('./cache-module');

//get user cart 
const getUserCart = async (userId) => {
   const cart = await cartDb.getUserCart(userId)

   if(cart){
     cacheModule.set(cart.userId,{cartId:cart.cartId})
   }
   
   return cart
}
//creat new cart
const createCart = async (userId,createCartDate) => {
    const cart = await cartDb.createCart(userId,createCartDate)
 
    if(cart){
  
      cacheModule.set(userId,{cartId:cart.insertId})
      
    }
    return cart.insertId
}
//delete cart
const deleteCart = async (cartId) => {
    return await cartDb.deleteCart(cartId)
}


module.exports = {
   getUserCart,
   createCart,
  deleteCart
}