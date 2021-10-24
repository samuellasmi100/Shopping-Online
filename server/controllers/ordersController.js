const router = require('express').Router();
const ordersLogic = require('../logic/ordersLogic');
const cacheModule = require('../logic/cache-module')

//get invalid dates order
router.get('/invalid-date', async (req,res,next) => {
    
    try {
      const invalidDates = await ordersLogic.getInvalidDates();
        res.json(invalidDates)
    } catch (error) {
        return next(error);
    }
});

//Add A New order
router.post('/', async (req,res,next) => {
    const userId = cacheModule.extractUserDataFromCache(req).userId;
    const cartId = cacheModule.get(userId).cartId;
    const orderDetails = req.body.orderDetails;
    console.log(orderDetails)
    try {
      const order = await ordersLogic.addNewOrder(userId,cartId,orderDetails);
        res.json("Sucssfule order")
    } catch (error) {
        return next(error);
    }
});

//Get recepit
// router.get('/:id', async (req,res,next) => {
//     // const userId = await cacheModule.extractUserDataFromCache(req).id;
//     const userId =  req.params.id

//     try {
//        const orders = await ordersLogic.getOrdersByUserId(userId);
//        res.json(orders)
//     } catch (error) {
//         console.log(error);
//         return next(error);
//     }
// })
router.get('/', async (req,res,next) => {
    const userId = await cacheModule.extractUserDataFromCache(req).userId;
    console.log("jbcdhs")
    console.log(userId)
    try {
       const orders = await ordersLogic.getLastOrdersByUserId(userId);
       res.json(orders)
    } catch (error) {
        console.log(error);
        return next(error);
    }
})




module.exports = router