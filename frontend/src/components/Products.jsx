import React, {  useState } from 'react'
import ProductCard from './ProductCard'
import { useEffect } from 'react'
import productService from '../services/product.service'


function Products() {
  const [products, setProducts] = useState([])

    
  // Fetch products from an API or use a static list
useEffect(() => {
  async function fetchProducts() {
    const allProducts = await productService.getProducts();
    setProducts(allProducts);
  }
  fetchProducts();
}, []);

  return (
    <div className="container mx-auto px-4 py-8">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
             {/* Empty State */}
       
        </div>
         {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Check back later for new arrivals!</p>
          </div>
        )}
    </div>
  )
}

export default Products