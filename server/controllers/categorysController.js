const router = require('express').Router();
const categorysLogic = require('../logic/categorysLogic');
const cacheModule = require('../logic/cache-module');


//get all categorys
router.get('/', async (req,res,next) => {

    try {
       const allCategorys = await categorysLogic.getAllCategorys();
       res.json(allCategorys)
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

//get products by categoris
router.get('/:id', async (req,res,next) => {
    const categoryId = req.parama.id
    try {
       const products = await categorysLogic.getProductsByCategorys(categoryId);
       res.json(products)
    } catch (error) {
        console.log(error);
        return next(error);
    }
})


module.exports = router