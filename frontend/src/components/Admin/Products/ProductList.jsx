import React, { useEffect, useState } from "react";
import productService from "../../../services/product.service";
import { Package, Search, Plus, Filter, AlertTriangle } from "lucide-react";
// Import from the env
const api_url = import.meta.env.VITE_API_URL;

function ProductList() {
  // Component logic will go here
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch products, handle loading state, etc.
  useEffect(() => {
    // Fetch products from an API or service
    async function fetchProducts() {
      const allProducts = await productService.getProducts();

      setProducts(allProducts);
    }
    fetchProducts();
  }, []);

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || p.categories_name === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Categories for filter dropdown
  const categories = [
    "All",
    ...new Set(products.map((p) => p.categories_name)),
  ];

  return (
    <>
     {/* Search & Filter Controls */}
        
      <div className="rounded-xl bg-white shadow-md p-6">
        {/* Controls Wrapper */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="relative w-full md:flex-[3] sm:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // reset pagination on search
              }}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category Filter */}
          <div className="w-full md:flex-[0.5] sm:w-1/3">
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentPage(1); // reset pagination on filter
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
       

        {/* Product Table */}
        <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Image
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Price
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Quantity
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">
                  <img
                    src={`${api_url}/uploads/${product.image}`}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {product.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {product.categories_name}
                </td>
                <td className="px-4 py-2 text-sm font-medium text-gray-800">
                  ${product.price}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {product.stock_quantity}
                </td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center py-10 mt-4 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Prev
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ProductList;
