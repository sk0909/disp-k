const async = require('async'),
    mongoose = require('mongoose'),
    MESSAGE = require('../messages');   /* import messages to return */

/* import modals */    
const Orders = require('../../models/shop/orders'),      
    Products = require('../../models/shop/product'),
    predictedValue = require('../../models/shop/prediction'),
    Users = require('../../models/account/user');




/* start - controller to display Orders(kitchen display) */
exports.displayOrder = async function (req, res) {
    let orders = await Orders.find({})
        .populate({
            path: "product_Id",
            model: "Product",
            populate: ({
                path: "prediction",
                model: "Prediction"
            })
        })
        .sort({ order_on: -1 })
    if (orders) {
        res.io.emit("orders", {
            status: true,
            message: orders
        });
        res.json({
            status: true,
            message: orders
        })
    }
    else {
        res.json({
            status: false,
            message: MESSAGE.ORDER_NOT_FOUND
        })
    }
}
/* end - controller to display Orders(kitchen display) */

/* start - controller to set prediction value of product */
exports.predictedValue = async function (req, res) {
    let predictionCount = await predictedValue.findOne({ product_Id: req.body.product_Id })
    if (predictionCount) {
        predictionCount.prediction.push({
            value: req.body.predictionValue,
            date: Date.now()
        })
        predictionCount.save()
            .then(p_v => {
                res.json({
                    status: true,
                    message: MESSAGE.PREDICTION_UPDATED
                })
            })
            .catch(p_err => {
                res.json({
                    status: false,
                    message: MESSAGE.Error
                })
            })
    }
    else {
        let prediction = new predictedValue();
        prediction.prediction = [{
            value: req.body.predictionValue,
            date: Date.now()
        }]
        prediction.product_Id = req.body.product_Id

        prediction.save()
            .then(async p_v => {
                if (p_v) {
                    let product = await Products.findOneAndUpdate({ _id: req.body.product_Id }, { prediction: p_v._id })
                    if (product) {
                        res.json({
                            status: true,
                            message: MESSAGE.PREDICTION_CREATED
                        })
                    } else {
                        res.json({
                            status: false,
                            message: MESSAGE.ERROR_CREATING_PREDICTION
                        })
                    }
                }
                else {
                    res.json({
                        status: false,
                        message: MESSAGE.ERROR_CREATING_PREDICTION
                    })
                }

            })
            .catch(p_err => {
                res.json({
                    status: false,
                    message: MESSAGE.Error
                })
            })
    }
}
/* end - controller to set prediction value of product */

/* start - controller to mark an order completed (Done button) */
exports.orderCompleted = async function (req, res) {
    let orderCount = await Orders.findOne({ $and: [{ product_Id: req.body.product_Id }, { quantity: { $gt: 0 } }] })
    if (orderCount) {
        orderCount.quantity -= 1;
        orderCount.created_till_now +=1;
        orderCount.save()
            .then(o_c => {
                res.json({
                    status: true,
                    message: MESSAGE.success,
                    data: o_c
                })
            })
            .catch(o_err => {
                res.json({
                    status: false,
                    message: MESSAGE.Error
                })
            })
    }
    else {
        res.json({
            status: false,
            message: MESSAGE.ORDER_ALREADY_DONE
        })
    }
}
/* end - controller to mark an order completed (Done button) */

/* start - controller to create products */
exports.createProduct = async function (req, res) {

    try {
        let product = await new Products();
        product.name = (req.body.name).toLowerCase();
        product.description = req.body.description;
        product = await product.save();

        if (product) {res.json({ status: true, code: 200, message: MESSAGE.saved }); res.io.emit('product',product) }
        else res.json({ status: false, code: 400, message: MESSAGE.Error })
    }
    catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) res.json({ status: false, code: 400, message: MESSAGE.DUPLICATE })
        else res.json({ status: false, code: 400, message: MESSAGE.Error })

    }
}
/* end - controller to create products */

/* start - controller to get products */
exports.getProducts = async function (req, res) {
    try {
        let product = await Products.find({ is_Deleted: false })
        if (product) res.json({ status: true, code: 200, message: product })
        else res.json({ status: false, code: 400, message: MESSAGE.Error })

    }
    catch (err) {
        res.json({ status: false, code: 400, message: MESSAGE.Error })

    }
}
/* end - controller to get products */

/* start - controller to place orders*/
exports.createOrder = async function (req, res) {
    try {
        if (req.body.user) {        /* place an order if user availble */
            let userRes = await userCreate(req.body.user)
            if (userRes.status) {
                let orderStatus = await Orders.findOne({ product_Id: req.body.product_Id })
                if (orderStatus && orderStatus.quantity >= 0) {
                    orderStatus.quantity += req.body.quantity;
                    orderStatus.save()
                        .then(o_s => {
                            return res.json({
                                status: true,
                                message: MESSAGE.ORDER_PLACED
                            })
                        })
                        .catch(os_err => {
                            return res.json({
                                status: true,
                                message: MESSAGE.Error
                            })
                        })
                }
                else {
                    let order = await new Orders();
                    order.user_Id = userRes.message._id;
                    order.product_Id = req.body.product_Id;
                    order.order_on = Date.now();
                    order.quantity = req.body.quantity;
                    order = await order.save();

                    if (order) res.json({ status: true, code: 200, message: MESSAGE.saved })
                    else res.json({ status: false, code: 400, message: MESSAGE.Error })
                }
            }
            else {
                res.json({ status: false, code: 400, message: userRes.message })
            }

        }
        else {
            res.json({ status: false, code: 400, message: MESSAGE.PHONE_REQUIRED })
        }
    }
    catch (err) {
        res.json({ status: false, code: 400, message: MESSAGE.Error })
    }
}
/* end - controller to place orders*/

/* start - controller to get orders*/
exports.getOrders = async function (req, res) {
    try {

        if (!(checkDataValidation(req.body.order_on))) {
            let orders = await Orders.find({ order_on: req.body.order_on })
            if (orders) {
              
                res.json({ status: true, code: 200, message: orders });
            }
            else res.json({ status: false, code: 400, message: MESSAGE.Error })
        }
        else {
            res.json({ status: false, code: 400, message: MESSAGE.Error })
        }
    }
    catch (err) {
        res.json({ status: false, code: 400, message: 'err' })

    }
}
/* end - controller to get orders*/

/* start function - to save a new user in db*/
async function userCreate(u) {
    return new Promise(async (resolve, reject) => {
        if (u.phoneNumber) {
            let checkUser = await Users.findOne({ phoneNumber: u.phoneNumber }) /* check user exist with phone number */
            if (checkUser) {    
                resolve({
                    status: true,
                    message: checkUser      /* find and return a existing user to order controller */
                })
            }
            else {
                let user = await new Users();  /* create a new user */
                user.firstName = u.firstName;
                user.lastName = u.lastName;
                user.phoneNumber = u.phoneNumber;
                await user.save()
                    .then(value => {
                        resolve({ status: true, code: 200, message: value })
                    })
                    .catch(err => {
                        if (err.name === 'MongoError' && err.code === 11000) resolve({ status: false, code: 400, message: 'duplicate  phone number not allowed' })
                        else reject({ status: false, code: 400, message: MESSAGE.Error })

                    })
            }
        }
        else {
            reject({ status: false, code: 400, message: MESSAGE.PHONE_REQUIRED })
        }
    })

}
/* end function - to save a new user in db*/

/* function - to check undefined or null*/
function checkDataValidation(str) {
    return (!str || /^\s*$/.test(str));
}
