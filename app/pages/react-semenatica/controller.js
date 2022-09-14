const React = require('react');
const View = require('./view');
const ServiceProduct = require('../../../services/productsService')


exports.fetchProducts = function fetchProducts(req, res, next) {
    const { name, limit } = req.query;
    const { siteId } = req.platform;
    ServiceProduct.getProducts(name, siteId, limit)
        .then(data => {
            res.locals.products = data;
            next();
        })
        .catch(err => next(err));
        
}

exports.render = function render(req, res) {
    const Products = props => <View {...props} />
    res.render(Products, {
        products: res.locals.products
    })
}