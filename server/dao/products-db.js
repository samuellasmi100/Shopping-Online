const db = require('./connection-wrapper');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error');

const getAllProducts = async () => {
    const sql = `SELECT p.id as productId,p.product_name as productName,p.price,p.image,c.category_name as categoryName,
    c.id as categoryId FROM products p join category c on c.id = p.category_id;`
  
    try {
        return await db.executeWithParameters(sql)
     } catch (e) {
         throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
     }
     
}

const getOneProducts = async (productId) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    const parameters = [productId];

    try {
        return await db.executeWithParameters(sql,parameters)
    } catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)   
    }
};

const addProducts = async (products) => {
    const {productName,price,image,categoryId} = products;

    const sql = 'INSERT INTO products (product_name,price,image,category_id) VALUE(?,?,?,?)';

    const parameters = [productName,price,image,categoryId];
 
   try {
      const vacationId = await db.executeWithParameters(sql,parameters);
      return vacationId.insertId
   } catch (e) {
     throw new ServerError(ErrorType.GENERAL_ERROR,sql,e)
 
   }
 };
 

const updateProduct = async (productId,updateProductData) => {
  const {productName,price,image} = updateProductData;

   let sql = "UPDATE products SET product_name=?, price = ?,image =? WHERE id = ?";
   const parameters = [productName,price,image,productId];
   try { 
    await db.executeWithParameters(sql,parameters);
} catch (e) {
  throw new ServerError(ErrorType.GENERAL_ERROR, sql, e)
  }
};

module.exports = {
    getAllProducts,
    getOneProducts,
    addProducts,
    updateProduct
}
