# shoppyglobe-backend
# 🛒 ShoppyGlobe Backend API

This is the backend API for **ShoppyGlobe**, an e-commerce application. It is built using **Node.js**, **Express**, and **MongoDB**.

---

## 📌 Features Implemented

### ✅ 1. Products API
- `GET /products` — Fetch all products
- `GET /products/:id` — Get product by ID

### ✅ 2. Cart API
- `POST /cart` — Add product to cart (🔒 Protected)
- `PUT /cart/:id` — Update product quantity (🔒 Protected)
- `DELETE /cart/:id` — Remove product from cart (🔒 Protected)

### ✅ 3. User Auth
- `POST /auth/register` — Register new user
- `POST /auth/login` — Login and get JWT token

---

## 🗃️ Database

### 🔹 MongoDB Collections:
- `products`: name, price, description, stock
- `cart`: userId, productId, quantity
- `users`: name, email, password (hashed), isAdmin

---

## 🧪 Testing (Thunder Client)

All routes were tested using [Thunder Client](https://www.thunderclient.com/), and **9+ screenshots** are attached inside the `screenshots` folder.

---

## 🚀 How to Run Locally

### 1. Clone this repo or unzip the folder:
```bash
git clone https://github.com/itankarsanskar18/shoppyglobe-backend.git
cd shoppyglobe-backend
