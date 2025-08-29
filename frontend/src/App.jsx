import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider  from './context/CartContext';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin';
import AddProduct from './pages/admin/AddProduct';
import Products from './pages/admin/Products';
import Footer from './components/Footer';
import EditProduct from './pages/admin/EditProduct';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart/:userId" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              {/* Add other admin routes as needed */}
              <Route path='/admin/products' element={<Products />} />
              <Route path='/admin/products/edit-product/:id' element={<EditProduct />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
