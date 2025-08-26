// Import the login service
const cartService = require("../services/cart.service");

// Handle the add to cart request
const addToCart = async (req, res) => {
    try {
       
        const {user_id, product_id, quantity } = req.body;
        
        console.log("Add to cart request by user:", user_id, "for product:", product_id, "with quantity:", quantity);
        
        const response = await cartService.addToCart(user_id, product_id, quantity);
        
        if (response) {
        res.status(200).json({ message: "Product added to cart successfully" });
        } else {
        res.status(400).json({ message: "Failed to add product to cart" });
        }
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    }

// Handle the get cart items by user id request
const getCartItemsByUserId = async (req, res) => {
   
    try {
        const userId = req.params.userId; // Assuming user ID is available in req.user
        console.log("Get cart items request by user:", userId);
        
        const cartItems = await cartService.getCartItemsByUserId(userId);
        
        res.status(200).json(cartItems);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    }
// Handle the remove cart item request
const removeCartItem = async (req, res) => {
    console.log(req.params);
     const { userId, productId } = req.params;
    try {
       
        console.log("Remove cart item request by user:", userId, "for product:", productId);
        
        const response = await cartService.removeCartItem(userId, productId);
        
        if (response) {
        res.status(200).json({ message: "Product removed from cart successfully" });
        } else {
        res.status(400).json({ message: "Failed to remove product from cart" });
        }
    } catch (error) {
        console.error("Error removing cart item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    }

// Handle the update cart item request
const updateCart = async (req, res) => {
     const { user_id, product_id, quantity } = req.body;
  if (!user_id || !product_id || !quantity) {
    return res.status(400).json({ status: "error", message: "Missing required fields" });
  }
    try {
       
        
        
        console.log("Update cart request by user:", user_id, "for product:", product_id, "with quantity:", quantity);
        
        const response = await cartService.updateCartItem(user_id, product_id, quantity);
        
        if (response) {
        res.status(200).json({ message: "Cart updated successfully" });
        } else {
        res.status(400).json({ message: "Failed to update cart" });
        }
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    }

// Export the functions
module.exports = {
    addToCart,
    getCartItemsByUserId,
    removeCartItem,
    updateCart
}

