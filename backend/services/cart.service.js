// Import the query function from the db.config.js file 
const conn = require("../config/db.config");

// A function to add a product to the cart
async function addToCart(userId, productId, quantity) {
  try {
    // Check if the product is already in the user's cart
    const checkQuery = "SELECT * FROM cart WHERE user_id = ? AND product_id = ?";
    const existingCartItem = await conn.query(checkQuery, [userId, productId]);

    if (existingCartItem.length > 0) {
      // If the product is already in the cart, update the quantity
      const updateQuery = "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?";
      const updateResult = await conn.query(updateQuery, [quantity, userId, productId]);
      return updateResult.affectedRows === 1;
    } else {
      // If the product is not in the cart, insert a new entry
      const insertQuery = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";
      const insertResult = await conn.query(insertQuery, [userId, productId, quantity]);
      return insertResult.affectedRows === 1;
    }
  } catch (err) {
    console.error("Error adding to cart:", err);
    throw err; // Rethrow the error for handling in the controller
  }
}

// Function to get cart items for a user (not used in addToCart but useful for completeness)
async function getCartItemsByUserId(userId) {
  try {
    const query = `SELECT cart.*, products.name, products.price, products.image, products.description
     FROM cart
     JOIN products ON cart.product_id = products.id
     WHERE cart.user_id = ?`;
    const cartItems = await conn.query(query, [userId]);
    return cartItems;
  } catch (err) {
    console.error("Error fetching cart items:", err);
    throw err;
  }
}
// Function to remove an item from the cart
async function removeCartItem(userId, productId) {
  try {
    const deleteQuery = "DELETE FROM cart WHERE user_id = ? AND id = ?";
    const deleteResult = await conn.query(deleteQuery, [userId, productId]);
    console.log(deleteResult)
    return deleteResult.affectedRows === 1;
  } catch (err) {
    console.error("Error removing cart item:", err);
    throw err;
  }
}
// Function to update the quantity of a cart item (not used in current controller but useful for completeness)
async function updateCartItem(userId, productId, quantity) {
  console.log(userId, productId, quantity)
  try {
    const query = "UPDATE cart SET quantity = ? WHERE user_id = ? AND id = ?";
    const result = await conn.query(query, [quantity, userId, productId]);
   console.log(result)
    return result.affectedRows > 0;
  } catch (err) {
    console.error("Error updating cart item:", err);
    throw err;
  }
}

// Export the functions for use in the controller
module.exports = {
  addToCart,
  getCartItemsByUserId,
  removeCartItem,
  updateCartItem
};