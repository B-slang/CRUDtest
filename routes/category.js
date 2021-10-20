const express = require('express')
const router = express.Router();

const { createCategory , getCategory , getCategoryById , updateCategory , deleteCategory} = require('../controller/Category')


router.route('/category/')
.get(getCategory)
.post(createCategory)


router.route('/categories')
.get(getCategory)

router.route('/category/:id')
.get(getCategoryById)
.put(updateCategory)
.delete(deleteCategory)


module.exports = router;
