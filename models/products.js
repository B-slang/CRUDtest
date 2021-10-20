const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  
    ProductName : {
        type : String,
        required: [true, 'Please Enter Product Name ']
    },
    CategoryId:{ type: mongoose.Types.ObjectId, ref: "Category"},

    
})

module.exports = mongoose.model('Product', productSchema);

