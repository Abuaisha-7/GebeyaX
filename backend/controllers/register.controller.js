// Import the employee service 
const registerService = require('../services/register.service');
// Create the add employee controller
async function createUser(req, res, next) {
  // Check if employee email already exists in the database 
  const userExists = await registerService.checkIfUserExists(req.body.email);
  // If employee exists, send a response to the client
  if (userExists) {
    res.status(400).json({
      error: "This email address is already associated with another user!"
    });
  } else {
    try {
      const userData = req.body;
      // Create the user
      const user = await registerService.createUser(userData);
      if (!user) {
        res.status(400).json({
          error: "Failed to add the user!"
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!"
      });
    }
  }
}



// Export the createEmployee controller 
module.exports = {
  createUser

};