🥗 Healthy Bites — Full-Stack Food Ordering Platform

Healthy Bites is a production-ready full-stack food ordering web application built using React, Node.js, Express, and MySQL.
The project demonstrates real-world engineering skills including state management, performance optimization, image handling, and admin workflows.

🔍 Why This Project Matters

This is not a tutorial app.
It simulates how a real food-tech platform (Swiggy / Zomato style) works, focusing on:

Scalable frontend architecture

Clean API design

Database-driven UI

Real user/admin workflows

Performance & UX optimization

🧩 Key Functionalities
Customer Side

Category-based product listing

Skeleton loaders for slow networks

Add-to-cart with dynamic quantity controls

Cart persistence using Context API

Toast notifications for UX feedback

Stock-based sold-out handling

Responsive UI (mobile-first)

Cart & Order Flow

Centralized cart state

Increment / decrement quantity logic

Price calculation (subtotal, delivery, total)

Ready for payment integration

Admin Side

Secure admin access

Product CRUD (Add / Edit / Delete)

Image upload support

Inventory & stock control

Order visibility & management

🛠️ Tech Stack
Frontend

React (Vite)

Context API for global state

Modular component architecture

Custom skeleton loaders

Lazy-loaded images

Clean CSS (no UI frameworks)

Backend

Node.js

Express.js

REST-based API design

Image upload handling (Multer / Cloudinary-ready)

Database

MySQL

Relational schema for products & orders

🧠 Engineering Highlights

Solved image loss issue on server restarts by moving to absolute image URLs

Implemented skeleton loading to improve perceived performance

Built reusable cart logic similar to real food-delivery apps

Handled slow API responses gracefully

Clean separation of concerns (UI, logic, API, DB)

📁 Architecture Overview
Frontend (React)
 ├─ Pages (Menu, Cart, Checkout, Admin)
 ├─ Components (Navbar, Cards, Loaders)
 ├─ Context (Cart State)
 └─ Utils (API helpers)

Backend (Node + Express)
 ├─ Routes
 ├─ Controllers
 ├─ DB Connection
 └─ Image Handling

⚙️ Setup (Local)
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm run dev

🚀 Deployment

Frontend: Netlify / Vercel (ready)

Backend: Render (free tier tested)

Database: MySQL

🎯 What This Project Demonstrates

Full-stack development capability

Real-world problem solving

UX + performance awareness

Production-level thinking

Clean, maintainable code

👤 Author

Rohit Ingale
Full-Stack Developer (React | Node | MySQL)

🔗 GitHub: https://github.com/RKROCKS47

⭐ Recruiter Note

This project reflects how I build real applications, not demos.
I focus on usability, performance, and clean architecture.
