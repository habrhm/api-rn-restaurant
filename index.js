const express = require('express');
const bodyParser = require('body-parser');

require('express-group-routes')

const app = express();
const PORT = process.env.PORT || 3000;



const categoryController = require('./controllers/categoryController')
const menuController = require('./controllers/menuController')
const transactionControllers = require('./controllers/transactionControllers')
const orderControllers = require('./controllers/orderControllers')
app.use(bodyParser.json())
app.group("/api/v1", (router) => {

    router.get('/categories', categoryController.index)    

    router.get('/menus', menuController.index)

    router.get('/transactions', transactionControllers.index)    
    router.get('/transaction/:id', transactionControllers.show)    
    router.post('/transaction', transactionControllers.store)    
    router.patch('/transaction/:id', transactionControllers.update)    
    router.delete('/transaction/:id', transactionControllers.delete)
    router.get('/transaction/orders/:id', orderControllers.showByTransactrionId)    
    router.patch('/transaction/orders/:id', orderControllers.updateStatusByTransactionId)    
    
    router.get('/orders', orderControllers.index)    
    router.get('/order/:id', orderControllers.show)    
    router.post('/order', orderControllers.store)    
    router.patch('/order/:id', orderControllers.update)    
    router.delete('/order/:id', orderControllers.delete) 
})
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App running on port ${PORT}`);
});