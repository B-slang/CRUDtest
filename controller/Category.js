const Category = require('../models/Category');


//Create a new Category
exports.createCategory = async (req, res, next) => {
    try{
        const category = await Category.create(req.body)

    res.status(201).json({
        success: true,
        category
    });
        
    }
    catch(error){
      if(error.name == 'ValidationError') {
          res.status(400).json({
                success: false,
                message: 'Category Already Exists'
          })
      }
      if(error.name == 'CastError') {
        res.status(400).json({
              success: false,
              message: 'Category Already Exists'
        })
    }
      else{
          res.status(401).json({
              success: false,
              message: err.message
          })
      }
    }    
}
//Get All Category
exports.getCategory = async (req, res, next) => {
    const category = await Category.find();

    res.status(200).json({
        success : true,
        category
    })
}
//get Category by Id
exports.getCategoryById = async (req, res, next) => {

    const category = await Category.findById(req.params.id);

    res.status(200).json({
        success : true,
        category
    })
}
//Update A Category
exports.updateCategory = async (req, res) => {
    // let id = await Category.findById(req.params.id);

    // if(!category) {
    //     res.status(404).json({
    //         message : 'Category not found'
    //     }) 
    // }
    // const id = req.params.id
    category = await Category.findByIdAndUpdate(req.params.id ,req.body,);


    res.status(200).json({
        success: true,
        category
    })
}

//Delete a Category 
exports.deleteCategory = async (req,res,next) => {
    const category = await Category.findById(req.params.id);

    if (!req.params.id) {
        res.status(400).send({
            message: "Requested Id not found"
        });
    }
        await category.remove();

        res.status(200).json({
            success: true,
            message: 'Category is deleted.'
        })
}