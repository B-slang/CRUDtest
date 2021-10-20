const express = require('express')
const router = express.Router();
const { createProduct , deleteProduct , getAllProducts , updateProduct , getProductsById } = require('../controller/Product')

router.route('/products')
.get(getAllProducts)

router.route('/product/new')
.post(createProduct)


router.route('/product/:id')
.put(updateProduct)
.get(getProductsById)
.delete(deleteProduct)


module.exports = router;