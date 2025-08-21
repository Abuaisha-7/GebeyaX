// Import from the env 
const api_url = import.meta.env.VITE_API_URL;
// Import from render
// const api_url = `https://abegarageappproject-api.onrender.com`;


// A function to send post request to create a new user
const createUser = async (formData) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  };
  const response = await fetch(`${api_url}/api/register`, requestOptions);
  return response;
}



// Export all the functions 
const registerService = {
  createUser
};

export default registerService;