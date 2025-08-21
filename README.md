# GebeyaX
# GebeyaX - E-commerce Platform

GebeyaX is a simple e-commerce web application built with **React**, **Node.js**, and **MySQL**. It supports product listings, shopping cart functionality, order processing, user authentication, and an **admin dashboard** for managing products.

---

## 🚀 Features

* **User Features:**

  * Browse products by category
  * View product details
  * Add to cart & checkout
  * User registration/login

* **Admin Features:**

  * Admin dashboard (`/admin`)
  * Add new products with category, quantity, and image upload
  * Manage existing products
  * Role-based access (only users with `admin` role can access admin dashboard)

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS
* **Backend:** Node.js (Express)
* **Database:** MySQL
* **Authentication:** JWT (JSON Web Tokens)
* **File Upload:** Multer (for product images)

---

## 📂 Project Structure

```
GebeyaX/
│── client/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Pages (Home, Product, Cart, Admin)
│   │   ├── App.jsx       # Main app
│   │   └── index.js      # Entry point
│
│── server/               # Node.js backend
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── middleware/       # Auth & validation
│   └── server.js         # Express server
│
│── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/gebeyax.git
cd gebeyax
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/` and add:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=gebeyax
JWT_SECRET=your_jwt_secret
```

Run migrations (include one default admin user in `users` table):

```sql
INSERT INTO users (user_email, password, role) VALUES ('admin@gebeyax.com', 'hashedpassword', 'admin');
```

Start backend:

```bash
npm start
```

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 Usage

* Open frontend: [http://localhost:5173](http://localhost:5173)
* API server runs on: [http://localhost:5000](http://localhost:5000)
* Default Admin Login: `admin@gebeyax.com`

---

## 📸 Screenshots

* 🏠 Home Page (Product listings)
* 🛒 Shopping Cart
* 🔐 Login / Register
* ⚙️ Admin Dashboard

---

## 📜 License

This project is licensed under the **MIT License**.

---

### ✨ Branding

"GebeyaX" comes from the Amharic word *Gebeya* (ገበያ) meaning **marketplace**, symbolizing a modern Ethiopian e-commerce hub.

---
