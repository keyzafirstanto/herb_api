const { productControllers } = require('../controllers');

const routers = require('express').Router();

routers.get('/get', productControllers.getAllProductData);
routers.post('/post', productControllers.addData);
routers.patch('/update/:product_id', productControllers.updateData);
routers.delete('/delete/:product_id', productControllers.deleteData);

module.exports = routers;
