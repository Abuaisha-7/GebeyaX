import React, { useState } from "react";
// import employee.service.js
import productService from "../../../services/product.service";
// Import the useAuth hook
import { useAuth } from "../../../context/AuthContext";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    quantity: "",
    image: null,
  });

  const categories = [
    { value: "1", label: "Electronics" },
    { value: "2", label: "Clothing" },
    { value: "3", label: "Books" },
    { value: "4", label: "Furniture" },
  ];

  // Create a variable to hold the user's token
  let loggedinUser = "";
  const { user } = useAuth();
  if (user && user.token) {
    loggedinUser = user.token;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setProduct({ ...product, image: file });
    }
  };
  // Log the image file name
  // console.log("Image file name:", product.image);
  console.log(
    product.name,
    product.price,
    product.description,
    product.category,
    product.quantity,
    product.image
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use FormData for file + text upload
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("quantity", product.quantity);
    formData.append("image", product.image);

    console.log("Form data ready to send:", formData);
    console.log(formData.get("image")); // Example to check if data is set correctly
    // Pass the form data to the service
    productService
      .addProduct(formData, loggedinUser)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Reset the form after successful submission
        setProduct({
          name: "",
          price: "",
          description: "",
          category: "",
          quantity: "",
          image: null,
        });
        setLoading(false);
        alert("Product added successfully!");
       navigate("/admin/products");
      })
      .catch((data) => {
        console.error(data.message);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity (Stock)
          </label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            min="0"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-600 file:text-white
                       hover:file:bg-blue-700"
            required
          />
          {product.image && (
            <img
              src={URL.createObjectURL(product.image)}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover rounded-lg border"
            />
          )}
        </div>

        {/* Submit */}
        {loading ? (
          <div className="w-full flex justify-center">
            <FadeLoader color="#3018aa" />
          </div>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
          >
            Add Product
          </button>
        )}
      </form>
    </div>
  );
}
