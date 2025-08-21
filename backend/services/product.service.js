// Import the query function from the db.config.js file 
const conn = require("../config/db.config");


// A function to create a new formData
async function createProduct(formData, image) {
  let newformData = {};
  try {
    // Insert the formData data into the formData table
    // let catagory_id = 1; // Handle optional category_id
    const query = "INSERT INTO products (name,description, price, stock_quantity, category_id, image) VALUES (?, ?, ?, ?, ?, ?)";
    const rows = await conn.query(query, [formData.name, formData.description, formData.price, formData.quantity, formData.category, image]);
    
    console.log("Rows affected:", rows);
    if (rows.affectedRows !== 1) {
      return false;
    }
    
    // Get the formData id from the insert 
    const formData_id = rows.insertId;
    
    // Construct the newformData object to return 
    newformData = {
      formData_id: formData_id,
      ...formData
    };
  } catch (err) {
    console.log(err);
  }
  // console.log("New formData created:", newformData);
  // Return the newformData object 
  return newformData;
} 
// A function to get all products
async function getProducts() {
  try {
    // Query to get all products
    const query = "SELECT * FROM products";
    const rows = await conn.query(query);
    console.log("Products fetched:", rows);
    // Check if rows are returned
    if (rows.length > 0) {
      return rows; // Return the array of products
    } else {
      return null; // No products found
    }
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err; // Rethrow the error for handling in the controller
  }
}
// A function to get a product by id
async function getProductById(productId) {
  try {
    // Query to get a product by id
    const query = "SELECT * FROM products WHERE id = ?";
    const rows = await conn.query(query, [productId]);
    // Check if a product is found  
    if (rows.length > 0) {
      return rows[0]; // Return the product object
    } else {
      return null; // Product not found
    }
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    throw err; // Rethrow the error for handling in the controller
  }
}





// Export the functions for use in the controller
module.exports = {
createProduct,
getProducts,
getProductById
  };