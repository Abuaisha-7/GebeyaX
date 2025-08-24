// Import the express module 
const express = require('express');
// Import the router module 
const router = express.Router();
// Import the install router 
const installRouter = require('./install.routes');
// Import the regiter router
const registerRouter = require('./register.routes')
// Import the login router
const loginRouter = require('./login.routes')
// Import the product router
const productRouter = require('./product.routes');
// Import the cart router
const cartRouter = require('./cart.routes');

// Add the install router to the middleware chain
router.use(installRouter);
// Add the rejister router to the middleware chain
router.use(registerRouter);
// Add the login router to the middleware chain
router.use(loginRouter);
// Add the product router to the middleware chain
router.use(productRouter);
// Add the cart router to the middleware chain
router.use(cartRouter);


// Export the router
module.exports = router;