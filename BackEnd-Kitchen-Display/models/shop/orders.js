var mongoose = require('mongoose');
var OrderSchema = mongoose.Schema({
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    product_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },

    order_on: {
        type: Date,
    },

    quantity :{
        type: Number,
        default: 1,
    },

    created_till_now:{
        type: Number,
        default: 0,
    },
    status:{
        type:Boolean,
        default:false
    }
  
})

mongoose.model('Order', OrderSchema)
module.exports = mongoose.model('Order')
