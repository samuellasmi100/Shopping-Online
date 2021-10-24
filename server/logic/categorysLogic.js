const categorysDb = require('../dao/categorys-db');

const getAllCategorys = async () => {
    return await categorysDb.getAllCategorys()
}

const getProductsByCategory = async (categoryId) => {
      await categorysDb.getProductsByCategory(categoryId)
}

module.exports = {
    getAllCategorys,
    getProductsByCategory,
   
}