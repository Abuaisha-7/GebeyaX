import { createContext, useState, useEffect } from "react";
import cartService from "../services/cart.service";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchCart() {
      if (user && user.user_id) {
        const response = await cartService.getCartItemsByUserId(
          user.user_id,
          user.token
        );

        setCart(response); // Set cart items from backend
      }
    }
    fetchCart();
  }, [user, user?.user_id, user?.token]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (userId, productId) => {
    cartService.removeCartItem(userId, productId, user.token);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (userId, productId, quantity) => {
    cartService.updateCart(userId,productId,quantity, user.token);
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export { CartContext };
