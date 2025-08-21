# E-Commerce Web App

A modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS.

## Features

### 🛍️ Product Management
- **Product Listings**: Display products in a responsive grid layout
- **Product Details**: Detailed view with images, descriptions, and pricing
- **Static Product Data**: Sample products with placeholder images

### 🛒 Shopping Cart
- **Add to Cart**: Add products with quantity selection
- **Cart Management**: View, update quantities, and remove items
- **Cart Persistence**: Cart state maintained across page refreshes
- **Total Calculation**: Real-time price calculations

### 🔐 User Authentication
- **User Registration**: Create new accounts with validation
- **User Login**: Secure authentication system
- **Local Storage**: User data stored locally for demo purposes

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Clean Interface**: Modern, intuitive user interface
- **Smooth Transitions**: Hover effects and animations
- **Professional Styling**: Consistent design language

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with cart count
│   └── ProductCard.jsx # Product display card
├── pages/              # Page components
│   ├── Home.jsx        # Product listings page
│   ├── ProductDetails.jsx # Single product view
│   ├── Cart.jsx        # Shopping cart page
│   ├── Login.jsx       # User login form
│   └── Register.jsx    # User registration form
├── context/            # React Context providers
│   └── CartContext.jsx # Cart state management
├── data/               # Static data
│   └── products.js     # Product information
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Tailwind CSS imports
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Usage

### Shopping Experience
1. **Browse Products**: Visit the home page to see all available products
2. **View Details**: Click "View Details" on any product card
3. **Add to Cart**: Use the "Add to Cart" button on product detail pages
4. **Manage Cart**: Visit the cart page to update quantities or remove items
5. **Checkout**: Use the checkout button (mock functionality)

### User Account
1. **Register**: Create a new account with username and password
2. **Login**: Sign in with your credentials
3. **Profile**: User session is maintained in localStorage

## Features in Detail

### Cart Context
- **addToCart(product)**: Add a product to the cart
- **removeFromCart(id)**: Remove a product by ID
- **updateQuantity(id, quantity)**: Update product quantity
- **getCartCount()**: Get total number of items in cart
- **getCartTotal()**: Calculate total cart value

### Responsive Design
- **Mobile**: Single column layout for small screens
- **Tablet**: Two-column grid for medium screens
- **Desktop**: Four-column grid for large screens
- **Navigation**: Collapsible mobile menu

### Product Data
The app includes 6 sample products:
- Wireless Bluetooth Headphones
- Smart Fitness Watch
- Portable Bluetooth Speaker
- Wireless Gaming Mouse
- Mechanical Keyboard
- 4K Webcam

## Customization

### Adding New Products
Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 7,
  name: "New Product",
  price: 99.99,
  image: "https://via.placeholder.com/300x300/color/FFFFFF?text=Product",
  description: "Product description here"
}
```

### Styling
- All styling is done with Tailwind CSS utility classes
- Custom colors and components can be added in `tailwind.config.js`
- Component-specific styles are inlined for easy modification

### Routing
- Routes are configured in `src/App.jsx`
- New pages can be added by creating components and adding routes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Heroicons](https://heroicons.com/)
