const db = require('./connection-wrapper');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

const getAllCategorys = async () => {
    const sql = `SELECT id as categoryId,category_name as categoryName FROM category;`
  
    try {
        return await db.executeWithParameters(sql)
     } catch (e) {
         throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
     }
}

const getProductsByCategory = async  (categoryId) => {
    let sql = `SELECT c.id as categoryId,c.category_name as categoryName, p.product_name as
     ProductName FROM category c join products p on c.id = p.category_id where c.id = ?  VALUE(?);`
     
    const parameters = [categoryId];
    try {
        return await db.executeWithParameters(sql,parameters)
     } catch (e) {
         throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
     }
}
module.exports = {
    getAllCategorys,
    getProductsByCategory,
}