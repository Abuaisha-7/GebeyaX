// Import the express module  
const express = require('express');

// Call the router method from express to create the router 
const router = express.Router();
// Import the cart controller
const cartController = require('../controllers/cart.controller');

// Create a route to handle the add to cart request on post
router.post("/api/cart",cartController.addToCart);
// Create a route to handle the get cart items request on get
router.get("/api/cart/:userId",cartController.getCartItemsByUserId);

// Export the router
module.exports = router;