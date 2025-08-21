// Import the express module  
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();
// Import the employee controller
const registerController = require('../controllers/register.controller');
// Import middleware 
// const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add employee request on post
router.post("/api/register", registerController.createUser);
// Create a route to handle the update employee request on put
// router.put("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.updateEmployee);
// // Create a route to handle the get all employees request on get
// router.get("/api/employees", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.getAllEmployees);
// // Create a route to handle the get employee request on get
// router.get("/api/employee/:id", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.getEmployee);

// Export the router
module.exports = router;