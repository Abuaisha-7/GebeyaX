// import ProductCard from '../components/ProductCard';
import Products from '../components/Products';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to E-Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products with the best prices and quality. 
            Shop smart, shop with us!
          </p>
        </div>

     
        {/* Products Component */}
          <Products />
        

     
      </div>
    </div>
  );
};

export default Home;
