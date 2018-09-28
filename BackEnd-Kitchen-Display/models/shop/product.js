var mongoose = require('mongoose');
var Productschema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    },
    is_Deleted:{
        type:Boolean,
        default:false
    },
    prediction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prediction',
        
    }
   
})

mongoose.model('Product', Productschema)
module.exports = mongoose.model('Product')
