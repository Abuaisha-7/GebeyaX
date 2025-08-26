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
// Create a route to handle the remove cart item request on delete
router.delete("/api/cart/:userId/:productId",cartController.removeCartItem);
// Create a route to handle the update cart item request on put
router.put("/api/cart",cartController.updateCart);

// Export the router
module.exports = router;