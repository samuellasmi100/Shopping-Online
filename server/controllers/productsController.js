const router = require('express').Router();
const productsLogic = require('../logic/productsLogic');
const cacheModule = require('../logic/cache-module');
const uploadImage = require("../middelware/upload-image")

//get all products
router.get('/', async (req,res,next) => {
 
    try {
       const orders = await productsLogic.getAllProducts();
       res.json(orders)
    } catch (error) {
        console.log(error);
        return next(error);
    }
})

//get one product
router.get('/:id', async (req,res,next) => {
    const productId = req.params.id;
    try {
       const product =  await productsLogic.getOneProducts(productId);
       res.json(product);
    } catch (error) {
        return next(error);
    }
})

//update product
router.put('/:id',uploadImage, async (req,res,next) => {
    const productId = req.params.id;
    const updateProductData = req.body;
    console.log(updateProductData)
    // const isAdmin = await cacheModule.extractUserDataFromCache(req).admin;
    try {
       await productsLogic.updateProduct(productId,updateProductData);
        res.status(200).json('Product Is Update');
    } catch (error) {
        return next(error);
    }
});

//add product
router.post('/', uploadImage, async (req,res,next) => {
    const addProductData = req.body;
    // const isAdmin = await cacheModule.extractUserDataFromCache(req).admin;

    try {
       await productsLogic.addProducts(addProductData);
        res.status(200).json('Product Is added sucssfuly');
    } catch (error) {
        return next(error);
    }
});

//delet product
router.delete('/:id', async (req,res) => {
    const productDeleteById = req.params.id;
    // const isAdmin = await cacheModule.extractUserDataFromCache(req).admin;

    try {
       const pruductIdToDelet = await productsLogic.deleteProducts(productDeleteById);
       res.status(200).json('Product Is delete');
    } catch (error) {
        return next(error);
    }
});

module.exports = router