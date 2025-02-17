const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('./ProductController');

router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;
