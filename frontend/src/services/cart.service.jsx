// import the eviroment variables
const api_url = import.meta.env.VITE_API_URL;

// A function to add item to cart
const addToCart = async (formData, token) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: JSON.stringify(formData) 
  };
  const response = await fetch(`${api_url}/api/cart`, requestOptions);
  return response;
}

// A function to get cart items by user id
const getCartItemsByUserId = async (userId, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
   
  };
  const response = await fetch(`${api_url}/api/cart/${userId}`, requestOptions);
  const data = await response.json();
  return data;
}

// function to remove item from cart
const removeCartItem = async (userId, productId, token) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
   
  };
  const response = await fetch(`${api_url}/api/cart/${userId}/${productId}`, requestOptions);
  return response;
}

// function to update cart item quantity
const updateCart = async (userId, productId,quantity, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: JSON.stringify({ user_id: userId, product_id: productId, quantity: quantity })
   
  };
  const response = await fetch(`${api_url}/api/cart`, requestOptions);
  return response;
}

// export the functions
const cartService = {
    addToCart,
    getCartItemsByUserId,
    removeCartItem,
    updateCart
};

export default cartService;