/**
 * Crear un array de productos y exportarlo para 
 * que lo utilice la ruta /products de la carpeta /api.
 * 
 * Una vez creado, deberás ejecutar en consola el comando
 * `npm run test:unit:watch mockProducts.spec.js` y corroborar que
 * todos los tests estén pasando.
 */

let products = [
    {
        id: 1,
        title: 'Phone',
        price: 3500,
        description: 'De alta tecnologia',
        quantity: 20,
    },
    {
        id: 2,
        title: 'Television',
        price: 4500,
        description: 'De alta tecnologia',
        quantity: 10,
    },
    {
        id: 3,
        title: 'Pantalla',
        price: 200,
        description: 'De alta tecnologia',
        quantity: 30,
    },
    {
        id: 4,
        title: 'Mouse',
        price: 2000,
        description: 'De alta tecnologia',
        quantity: 5,
    }
];

module.exports = products;