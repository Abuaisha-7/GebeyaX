// Import the query function from the db.config.js file 
const conn = require("../config/db.config");
// Import the bcrypt module to do the password comparison 
const bcrypt = require('bcryptjs');
// Import the employee service to get employee by email  
const registerService = require("./register.service");

// Handle employee login 
async function logIn(userData) {
    try {
        let returnData = {}; // Object to be returned
        const user = await registerService.getUserByEmail(userData.email);
        if (user.length === 0) {
          returnData = {
            status: "fail",
            message: "Employee does not exist"
          };
          return returnData;
        }
        const passwordMatch = await bcrypt.compare(userData.password, user[0].password);
        if (!passwordMatch) {
          returnData = {
            status: "fail",
            message: "Incorrect password"
          };
          return returnData;
        }
    
        returnData = {
          status: "success",
          data: user[0]
        };
        return returnData;
      } catch (error) {
        console.log(error);
      }
}


// Export the function 
module.exports = {
    logIn
  };