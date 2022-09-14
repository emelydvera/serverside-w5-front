const React = require('react');
const View = require('./view');
const ServiceProduct = require('../../../services/productsService')


exports.fetchProducts = function fetchProducts(req, res, next) {

    ServiceProduct.getProducts('motorola', req.platform.siteId, 10)
        .then(data => {
            res.locals.products = data;
            next();
        })
        .catch(err => {
            console.log('Error en Controller products', err);
        })
}

exports.render = function render(req, res) {
    const Products = props => <View {...props} />
    res.render(Products, {
        products: res.locals.products
    })
}

