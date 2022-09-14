/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
//configuraciones
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');
const polyfillsMiddleware = require('nordic/script/polyfills-middleware');

/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */
const demoRoute = require('../pages/demo');
const demoWithPageRoute = require('../pages/demoWithPage');
//aqui creamos
const home2 = require('../pages/home2');
const home = require('../pages/home');
const products = require('../pages/products');
const reactSemantica =require('../pages/react-semenatica')
/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}demo`));

/**
 * Mount routers
 */
router.use('/demo', demoRoute);
router.use('/demoWithPage', demoWithPageRoute);
//aqui tambien 
router.use('/home2', home2);
router.use('/home', home);
router.use('/products', products);
router.use('/semantica', reactSemantica);



/**
 * Expose router
 */
module.exports = router;
