// Import the query function from the db.config.js file 
const conn = require("../config/db.config");
// Import the bcrypt module 
const bcrypt = require('bcryptjs');
// A function to check if employee exists in the database 
async function checkIfUserExists(email) {
  const query = "SELECT * FROM users WHERE email = ? ";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// A function to create a new user 
async function createUser(user) {
  let createdUser = {};
  try {
    // Generate a salt and hash the password 
    const salt = await bcrypt.genSalt(10);
    // Hash the password 
    const hashedPassword = await bcrypt.hash(user.password, salt);
    // Insert the email in to the employee table  
    const query = "INSERT INTO users (email, password) VALUES (?, ?)";
    const rows = await conn.query(query, [user.email, hashedPassword]);
    console.log(rows);
    if (rows.affectedRows !== 1) {
      return false;
    }
    // Get the employee id from the insert 
    const user_id = rows.insertId;
   
    // construct to the user object to return 
    createdUser = {
      user_id: user_id
    }
  } catch (err) {
    console.log(err);
  }
  // Return the user object 
  return createdUser;
}

// A function to get employee by email
async function getUserByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ?";
  const rows = await conn.query(query, [email]);
    return rows;
}


// Export the functions for use in the controller
module.exports = {
  checkIfUserExists,
  createUser,
  getUserByEmail
 
  };