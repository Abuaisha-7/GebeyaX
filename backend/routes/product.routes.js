// Import the express module  
const express = require('express');
// Import the multer module for handling file uploads
const multer = require('multer');

// Call the router method from express to create the router 
const router = express.Router();
// Import the employee controller
const productController = require('../controllers/product.controller');

// Configure Multer storage (uploads to ./uploads/)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // unique filename
  },
});

const upload = multer({ storage: storage });

// Create a route to handle the add employee request on post
router.post("/api/add_product", upload.single('image'), productController.addProduct);
// Create a route to handle the get all products request on get
router.get("/api/products", productController.getProducts);
// Create a route to handle the get product by id request on get
router.get("/api/product/:id", productController.getProductById);

// Export the router
module.exports = router;