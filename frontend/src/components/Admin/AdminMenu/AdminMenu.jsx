import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AdminMenu() {
  const location = useLocation();

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '' },
    { path: '/admin/orders', label: 'Orders', icon: '' },
    { path: '/admin/order', label: 'New Order', icon: '➕' },
    { path: '/admin/add-employee', label: 'Add Employee', icon: '' },
    { path: '/admin/employees', label: 'Employees', icon: '' },
    { path: '/admin/add-customer', label: 'Add Customer', icon: '' },
    { path: '/admin/customers', label: 'Customers', icon: '' },
    { path: '/admin/services', label: 'Services', icon: '🔧' },
    {path: '/admin/products', label: 'Products', icon: '📦' },
    {path: '/admin/add-product', label: 'Add Product', icon: '➕' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Menu</h2>
        <p className="text-sm text-gray-600">Manage your e-commerce store</p>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive(item.path)
                ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500 shadow-sm'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
              }
            `}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Admin Info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-blue-600 text-xl">👨‍💼</span>
          </div>
          <h3 className="text-sm font-medium text-gray-900">Administrator</h3>
          <p className="text-xs text-gray-500">Full Access</p>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;