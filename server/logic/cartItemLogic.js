const cartItemDb = require('../dao/cartItem-db');
const orderDb = require('../dao/orders-db');

const getAllProductsInCart = async (userId,cartId) => {
    const cartProducts = await cartItemDb.getAllProductsInCart(cartId)
    return cartProducts
}

const addProductsToCart = async (productDetails,cartId) => {
      await cartItemDb.addProductsToCart(productDetails,cartId)
}
const deleteProductFromCart = async (productId,cartId) => {
    await cartItemDb.deleteProductFromCart(productId,cartId)
}

const getOneProduct = async (cartId,productId) => {
    return await cartItemDb.getOneProduct(cartId,productId)
}
const clearCart = async (cartId) => {
    return await cartItemDb.clearCart(cartId)
}

module.exports = {
    getAllProductsInCart,
    deleteProductFromCart,
    clearCart,
    addProductsToCart,
    getOneProduct
}