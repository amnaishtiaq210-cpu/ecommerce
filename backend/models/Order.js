const mongoose = require('mongoose');
module.exports = mongoose.model('Order',new mongoose.Schema({
 user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
 items:Array,
 total:Number,
 createdAt:{type:Date,default:Date.now}
}));