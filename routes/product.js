const router = require('express').Router()
const productController = require('../controllers/products')

router.post('/', productController.postProduct)
router.get('/', productController.getProducts)

module.exports = router