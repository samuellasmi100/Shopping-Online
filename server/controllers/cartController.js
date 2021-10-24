const router = require('express').Router();
const cartLogic = require('../logic/cartLogic');
const cacheModule = require('../logic/cache-module');


//get user cart
router.get('/', async (req,res,next) => {
    const userId = cacheModule.extractUserDataFromCache(req).userId;

    try {
       const userCart = await cartLogic.getUserCart(userId);
       res.json(userCart)
    } catch (error) {
        console.log(error);
        return next(error);
    }
})

//creat cart
router.post('/', async (req,res,next) => {
    const userId = cacheModule.extractUserDataFromCache(req).userId;
    const createCartDat = req.body.createCartDate
    try {
       const newCart = await cartLogic.createCart(userId,createCartDat);
       res.json(newCart)
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

//delete cart
router.delete('/:id', async (req,res) => {
    const cartId = req.params.id
    try {
       const deleteCart = await cartLogic.deleteCart(cartId);
       res.json('Cart Is Deleted');
    } catch (error) {
        return next(error);
    }
});

module.exports = router
