// Import the login service
const productService = require("../services/product.service");


// Handle the add product request
const addProduct = async (req, res) => {
  try {
    const formData = req.body;
    const image = req.file ? req.file.filename : null;
    console.log("Received form data:", formData);
    console.log(image); // Log the uploaded file information
    const response = await productService.createProduct(formData, image);
    
    if (response) {
      res.status(200).json({ message: "Product added successfully" });
    } else {
      res.status(response.status).json({ message: "Failed to add product" });
    }
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Handle the get products request
const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
   console.log("Products fetched:", products);
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// Handle the get product by id request
const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.getProductById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Export the functions
module.exports = {
  addProduct,
  getProducts,
  getProductById
  // Other functions can be added here as needed
};
