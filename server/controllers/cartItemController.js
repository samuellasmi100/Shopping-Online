const router = require('express').Router();
const cartItemLogic = require('../logic/cartItemLogic');
const cacheModule = require('../logic/cache-module');



//inset products into cartItem
router.post('/', async (req,res,next) => {

    const id = cacheModule.extractUserDataFromCache(req).userId;
    const cartId = cacheModule.get(id).cartId

    const productDetails = req.body.product;
    console.log(productDetails)
    
    try {
       const addProductsToCart = await cartItemLogic.addProductsToCart(productDetails,cartId);
       res.json(addProductsToCart)
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

//get all shopping cart of customer
router.get('/', async (req,res,next) => {
    console.log("blabla")
    const userId = cacheModule.extractUserDataFromCache(req).userId;
    const cartId = cacheModule.get(userId).cartId;

    try {
       const productsInCarts = await cartItemLogic.getAllProductsInCart(userId,cartId);
       console.log(productsInCarts)
       res.json(productsInCarts)
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

//get One product
router.get('/:id', async (req,res,next) => {
    const userId = cacheModule.extractUserDataFromCache(req).userId
    const cartId = cacheModule.get(userId).cartId;
    const productId = req.params.id
    try {
       const getOne = await cartItemLogic.getOneProduct(cartId,productId);
       res.json(getOne)
    } catch (error) {
        console.log(error);
        return next(error);
    }
});


//delete product from shopping cart
router.put('/', async (req,res,next) => {
    const productId = req.body.productId;
    const userId = cacheModule.extractUserDataFromCache(req).userId
    const cartId = cacheModule.get(userId).cartId;

    try {
       const pruductIdToDelet = await cartItemLogic.deleteProductFromCart(productId,cartId);
       res.status(200).json('This Product Is Removing from Your Cart');
    } catch (error) {
        return next(error);
    }
});

//delete all product from shopping cart
router.delete('/:id', async (req,res,next) => {
   const cartId = +req.params.id
   console.log(cartId)
    try {
       const clearCartItem = await cartItemLogic.clearCart(cartId);
       res.status(200).json('Your Cart Is Empty');
    } catch (error) {
        return next(error);
    }
});
module.exports = router