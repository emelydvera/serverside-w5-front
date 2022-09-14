/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const productos=require('./1-products/products')
const currencies =require ('./2-currencies/currencies')
const productsQuery = require('./3-query/products-query');


/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/products', productos);
router.use('/currencies', currencies);
router.use('/products-query', productsQuery);

/**
 * Expose API router
 */
module.exports = router;
