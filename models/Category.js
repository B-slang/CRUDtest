const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')


const CategorySchema = new mongoose.Schema({

    CategoryName: {
        type : String,
        required: [true, 'Please Enter Category Name '],
        unique : true

    }


})

CategorySchema.plugin(uniqueValidator)
module.exports = mongoose.model('Category', CategorySchema);
