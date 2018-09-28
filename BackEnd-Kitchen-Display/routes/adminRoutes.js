let express = require('express'),
    router = express.Router();
let inventoryController = require('./../controllers/adminControllers/inventory');



// Inventory Route start

router.post('/inventory/displayOrder', inventoryController.displayOrder);

router.post('/inventory/todaysPrediction', inventoryController.predictedValue);

router.post('/inventory/addProduct', inventoryController.createProduct);

router.post('/inventory/createOrder', inventoryController.createOrder);

router.post('/inventory/orderCompleted', inventoryController.orderCompleted);

router.get('/inventory/getProduct', inventoryController.getProducts);



module.exports = router;
