const express = require('express');
const expressFileUpload = require("express-fileupload")
const userController = require('./controllers/userController');
const ordersController = require('./controllers/ordersController');
const cartItemController = require('./controllers/cartItemController');
const productsController = require('./controllers/productsController');
const cartController = require('./controllers/cartController')
const categorysController = require('./controllers/categorysController')
const errorHandler = require('./errors/error-handler');
// const loginFilter = require('./middelware/login-filter');


const cors = require('cors');
const app = express();
app.use(cors())
app.use(expressFileUpload())
// app.use(loginFilter());
app.use(express.json());

app.use("/images",express.static("./images"))
app.use('/users',userController);
app.use('/orders',ordersController);
app.use('/products',productsController);
app.use('/cart',cartController);
app.use('/cartitem',cartItemController);
app.use('/categorys',categorysController);


app.use(errorHandler);

app.listen(5001,() => console.log('The server is runing'));