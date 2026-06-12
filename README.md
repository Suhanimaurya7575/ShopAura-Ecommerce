<div align="center">

 <img src="./frontend/src/assets/logo.png" alt="ShopAura Logo" width="290" />



### A Modern Full-Stack E-Commerce Platform Built with the MERN Stack

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Framework-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Stripe](https://img.shields.io/badge/Payments-Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/)
[![Cloudinary](https://img.shields.io/badge/Storage-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-black?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](#-contributing)
[![Made with ❤](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=flat-square)](#-developer)

</div>

---

ShopAura is a production-style, full-stack online shopping platform built using **MongoDB, Express.js, React.js, and Node.js (MERN)**. It delivers a complete e-commerce experience — a sleek customer storefront, a secure REST API backend, and a dedicated admin dashboard for managing products, inventory, and orders in real time.

This project demonstrates real-world implementation of authentication, database design, RESTful APIs, cloud image storage, multi-gateway payment processing, and responsive UI/UX — making it an ideal showcase for full-stack development skills.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [System Architecture](#-system-architecture)
- [Application Workflow](#-application-workflow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Overview](#-api-overview)
- [Demo Admin Access](#-demo-admin-access)
- [Contributing](#-contributing)
- [Developer](#-developer)

---

## 📖 Overview

ShopAura allows customers to register, browse products by category, search and filter items, view detailed product pages, select sizes, manage a shopping cart in real time, and check out using multiple payment methods. On the other side, administrators get a fully featured dashboard to add/manage products, control inventory, and track and update customer orders — with every change reflected instantly on the storefront.

---

## 🌐 Live Demo

| Module | Link |
|---|---|
| 🛒 Customer Storefront | `<add-your-deployed-frontend-url-here>` |
| 🛠️ Admin Dashboard | `<add-your-deployed-admin-url-here>` |
| 🔗 Backend API | `<add-your-deployed-backend-url-here>` |



---

## 🚀 Features

### 👤 Customer Experience

| Feature | Description |
|---|---|
| 🔐 Authentication | Secure registration & login with JWT |
| 🛍️ Product Browsing | Explore products with category-based filtering |
| 🔎 Search | Real-time product search |
| 📄 Product Details | Dedicated detail pages with size selection |
| 🛒 Smart Cart | Add, update, and remove items with live cart sync |
| 📦 Order Placement | Multiple payment options at checkout |
| 📜 Order History | Track previous orders and statuses |
| 📱 Responsive UI | Fully optimized for mobile, tablet, and desktop |

### 🛠️ Admin Dashboard

| Feature | Description |
|---|---|
| 🔐 Secure Admin Login | Restricted access for store administrators |
| ➕ Product Management | Add, view, and remove products |
| 🖼️ Image Uploads | Upload product images via Cloudinary |
| 📏 Size & Stock Control | Manage available sizes and inventory levels |
| 📬 Order Tracking | View incoming customer orders |
| 🔄 Status Updates | Update order status in real time |
| 📊 Store Monitoring | Centralized control of store operations |

### 💳 Payment Methods

- 💵 **Cash on Delivery (COD)**
- 💳 **Stripe** — global online card payments
- 🇮🇳 **Razorpay** — popular Indian payment gateway

### ⚙️ Backend Capabilities

- RESTful API architecture
- MongoDB + Mongoose schema modeling
- JWT-based authentication & authorization
- Cloudinary-powered image storage
- Modular cart, product, and order management
- Secure, validated API endpoints

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, React Router DOM, Axios, Tailwind CSS, React Toastify |
| **Admin Panel** | React.js, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Cloudinary |
| **Payments** | Stripe, Razorpay |

</div>

---

## 🏗️ System Architecture

```
                ┌────────────────────┐
                │   MongoDB Atlas     │
                │  (Products, Users,  │
                │   Orders, Carts)    │
                └─────────▲──────────┘
                          │ Mongoose
                ┌─────────┴──────────┐
                │   Express Backend   │
                │   (REST API + JWT)  │
                └───▲────────────▲────┘
                    │            │
        ┌───────────┘            └───────────┐
        │                                     │
┌───────┴────────┐                  ┌─────────┴────────┐
│  React Frontend │                  │  React Admin Panel │
│  (Storefront)   │                  │  (Dashboard)       │
└─────────────────┘                  └────────────────────┘
        │                                     │
        └──────────────┬──────────────────────┘
                        │
              ┌─────────┴─────────┐
              │ Cloudinary / Stripe│
              │     / Razorpay     │
              └────────────────────┘
```

---

## 🔄 Application Workflow

### 🧑‍💼 Admin Workflow

1. Admin logs into the **Admin Dashboard**.
2. Admin adds a new product with name, description, category, price, images, sizes, and stock quantity.
3. Product data is persisted in **MongoDB**.
4. New products appear instantly on the **customer storefront**.
5. Admin monitors and reviews incoming customer orders.
6. Admin updates order status (e.g. Processing → Shipped → Delivered).
7. Updated status is reflected in real time on the customer side.

### 🛍️ Customer Workflow

1. Customer registers or logs in.
2. Customer browses, searches, and filters products by category.
3. Customer selects a product size and adds it to the cart.
4. Customer updates quantities or removes items from the cart.
5. Customer proceeds to checkout.
6. Customer selects a payment method — **COD**, **Stripe**, or **Razorpay**.
7. Order is created and stored in **MongoDB**.
8. Customer can view order history and live order status.

---

## 📂 Project Structure

```bash
ShopAura/
│
├── frontend/        # Customer-facing storefront (React + Tailwind)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/         # REST API & database layer (Node + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── admin/           # Admin dashboard (React + Tailwind)
    ├── src/
    ├── public/
    └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas cluster)
- Cloudinary, Stripe accounts for full feature support

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ShopAura-Ecommerce.git
cd ShopAura-Ecommerce
```

### 2️⃣ Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# Admin Panel
cd ../admin
npm install
```

### 3️⃣ Run the Applications

Open three separate terminals:

```bash
# Terminal 1 — Backend API
cd backend
npm run server
```

```bash
# Terminal 2 — Customer Frontend
cd frontend
npm run dev
```

```bash
# Terminal 3 — Admin Dashboard
cd admin
npm run dev
```

By default:
- Backend → `http://localhost:4000`
- Frontend → `http://localhost:5174`
- Admin → `http://localhost:5173`

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory with the following keys:

```env
# Database
MONGODB_URI=your_mongodb_uri

# Authentication
JWT_SECRET=your_jwt_secret

# Cloudinary (Image Storage)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key

# Admin Credentials
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```



---

## 🔗 API Overview

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/user/login` | Authenticate user & get JWT | ✅ |
| `POST` | `/api/product/add` | Add a new product (Admin) | ✅ |
| `GET` | `/api/product/list` | Get all products | ✅|
| `POST` | `/api/product/remove` | Remove a product (Admin) | ✅ |
| `POST` | `/api/cart/add` | Add item to cart | ✅ |
| `POST` | `/api/cart/update` | Update cart item quantity | ✅ |
| `POST` | `/api/order/place` | Place a new order | ✅ |
| `GET` | `/api/order/list` | View all orders (Admin) | ✅ |
| `POST` | `/api/order/status` | Update order status (Admin) | ✅ |



---

## 🧑‍💻 Demo Admin Access

For evaluation and demo purposes only:

```
DEMO_ADMIN_EMAIL=demo@shopaura.com

DEMO_ADMIN_PASSWORD=Demo@123
```

The admin dashboard provides access to:

- 🗂️ Product Management
- 📦 Inventory Control
- 🚚 Order Tracking & Status Updates
- 🏬 Store Management Tools



---


## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m "Add: your feature description"`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes relevant documentation or comments.


---

## 👩‍💻 Developer

<div align="center">

### Suhani Maurya

🎓 BCA Student • 💻 Full Stack Developer • 🌱 MERN Stack Enthusiast • 🛒 E-Commerce App Developer

ShopAura demonstrates practical, end-to-end implementation of authentication, database design, payment gateway integration, cloud storage, responsive UI/UX, and full-stack application architecture.



</div>