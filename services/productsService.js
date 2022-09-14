/**
 * Ejercitación integradora:
 * En este archivo deberás crear el servicio.
 *
 ********************************************
 * Una vez creado, deberás correr el comando 
 * `npm run test:unit:watch products-service`
 * y corroborrar que pasen los tests.
 ********************************************
 */
const restclient = require('nordic/restclient')({
    timeout: 5000
});
const normalizer = require('./transforms/normalizarProductos')

class ServiceProduct {
    static getProducts( name='motorola', siteID, limit=10) {
        return restclient.get(`/sites/${siteID}/search?q=${name}&limit=${limit}`)
            .then(res => normalizer(res.data.results))
            .catch( err=> console.log(err))
    }
}

module.exports = ServiceProduct;