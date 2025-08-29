// Import from the env 
const api_url = import.meta.env.VITE_API_URL;
// Import from render
// const api_url = `https://abegarageappproject-api.onrender.com`;


// A function to send post request to create a new employee 
const addProduct = async (formData,loggedinUser) => {
  const requestOptions = {
    method: 'POST',
    body: formData,
    
    headers: {
      'x-access-token': loggedinUser // Assuming loggedinUser contains the token
    }
  };
  const response = await fetch(`${api_url}/api/add_product`, requestOptions);
  return response;
}

// // A function to send get request to get all products
const getProducts = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };  
  const response = await fetch(`${api_url}/api/products`, requestOptions);
  console.log(response)
  const data = await response.json();
  // console.log(data)
  return data;
}
// A function to send get request to get product by id
const getProductById = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${api_url}/api/product/${id}`, requestOptions);
  if (!response.ok) {
    throw new Error('Product not found');
  }
  const data = await response.json();
  return data;
}
// A function to send delete request to delete product
const deleteProduct = async (productId) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${api_url}/api/delete_product/${productId}`, requestOptions);
  return response;
}
// const getAllEmployees = async (token) => {
//   // console.log(token);
//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-access-token': token
//     }
//   };
//   const response = await fetch(`${api_url}/api/employees`, requestOptions);
//   return response;
// }

// // A function to send get request to get employee
// const getEmployee = async (token,id) => {

//   console.log(id);
 
//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-access-token': token
//     },
   
//   };
//   const response = await fetch(`${api_url}/api/employee/${id}`, requestOptions);
//   return response;
  
// }

// // A function to send put request to update employee 
// const updateEmployee = async (formData,loggedinUser) => {
//   const requestOptions = {
//     method: 'PUT',
//     headers: { 
//       'Content-Type': 'application/json',
//       'x-access-token': loggedinUser
//      },
//     body: JSON.stringify(formData)
//   };
//   const response = await fetch(`${api_url}/api/employee`, requestOptions);
//   return response;
// }

// Export all the functions 
const productService = {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
}
export default productService; 