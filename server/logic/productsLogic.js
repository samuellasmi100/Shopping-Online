const productsDb = require('../dao/products-db');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

const getAllProducts = async () => {
    return await productsDb.getAllProducts()
}

const getOneProducts = async (productId) => {
    return await productsDb.getOneProducts(productId)
}

const addProducts = async (newProductDetails) => {

    await validateNewProductDetails(newProductDetails)

    return await productsDb.addProducts(newProductDetails)
}

const deleteProducts = async (productId) => {
    return await productsDb.deleteProducts(productId)
}

const updateProduct = async (productId,updateProductData) => {
    await validateProductDetails(updateProductData)
    return await productsDb.updateProduct(productId,updateProductData)
}

const validateProductDetails = async (updateProductData) => {

    if (updateProductData.productName === "" || updateProductData.productName == null) {
        throw new ServerError(ErrorType.PRODUCT_NAME);
    };

    if (updateProductData.price === "" || updateProductData.price == null) {
        throw new ServerError(ErrorType.PRICE);
    };
    
    if (updateProductData.price <= 0 ) {
        throw new ServerError(ErrorType.PRICE_INVALID);
    };

    // if (updateProductData.image === "" || updateProductData.image == null) {
    //     throw new ServerError(ErrorType.IMAGE);
    // };
}

const validateNewProductDetails = async (updateProductData) => {

    if (updateProductData.productName === "" || updateProductData.productName == null) {
        throw new ServerError(ErrorType.PRODUCT_NAME);
    };

    if (updateProductData.price === "" || updateProductData.price == null) {
        throw new ServerError(ErrorType.PRICE);
    };

    if (updateProductData.price <= 0 ) {
        throw new ServerError(ErrorType.PRICE_INVALID);
    };

    // if (updateProductData.image === "" || updateProductData.image == null) {
    //     throw new ServerError(ErrorType.IMAGE);
    // };

    if (updateProductData.categoryId === "" || updateProductData.categoryId == null) {
        throw new ServerError(ErrorType.EMAIL_FORMAT);
    };
}
module.exports = {
    getAllProducts,
    getOneProducts,
    addProducts,
    deleteProducts,
    updateProduct,
    validateProductDetails
}