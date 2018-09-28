var mongoose = require('mongoose');
var PredictionSchema = mongoose.Schema({
    
  
    product_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    prediction: [{
       value: {
           type: Number,
           default: 0
       },
       date: {
           type: Date,
           default: Date.now()
       }
    }]

})

mongoose.model('Prediction', PredictionSchema)
module.exports = mongoose.model('Prediction')
