# 🎸 Music Instrument Marketplace

A **full‑featured, modern music instrument marketplace** built with **Angular 18** and **TypeScript**. This project simulates a real‑world e‑commerce application where users can browse, filter, and purchase musical instruments using a clean, responsive UI and a mock REST API backend.

This repository represents a **complete frontend project**, suitable for academic submission, portfolio presentation, or as a foundation for a production‑ready application.


---

## 🎯 Project Goal

The goal of this project is to **design and implement a complete frontend e‑commerce application** using Angular, following real‑world development practices.

Specifically, the project aims to:

* Demonstrate understanding of **Angular fundamentals** (components, services, routing)
* Apply **TypeScript** for scalable and maintainable code
* Implement **state management** using RxJS without external libraries
* Simulate a real online shop experience (browsing, filtering, cart management)
* Build a **responsive and user‑friendly UI** suitable for desktop and mobile
* Integrate with a **mock REST API** to handle asynchronous data

This project is intended for **academic evaluation**, **portfolio presentation**, and as a **foundation for a full‑stack application**.

---

## 🚀 Features

### Core Functionality

* 🎵 Browse a catalog of musical instruments
* 🔍 Filter products by:

  * Category
  * Condition (New / Used)
  * Price range
* 📄 View detailed product pages
* ⭐ Display ratings and review counts
* 🛒 Add, remove, and update items in a shopping cart
* 💾 Persist cart data using **localStorage**
* 📱 Fully responsive design (desktop & mobile)

### Technical Highlights

* Component‑based Angular architecture
* Client‑side routing with standalone components
* Centralized state management using **RxJS Observables**
* Mock REST API with **json‑server**
* Clean separation of concerns (components, services, pages)

---

## 🛠 Tech Stack

| Layer            | Technology            |
| ---------------- | --------------------- |
| Frontend         | Angular 18            |
| Language         | TypeScript            |
| Styling          | CSS3 (Flexbox & Grid) |
| State Management | RxJS                  |
| Backend (Mock)   | json‑server           |
| Build Tooling    | Angular CLI           |
| Package Manager  | npm                   |

---

## 📁 Project Structure

The project follows Angular best practices by separating **components**, **pages**, and **services** to ensure maintainability and scalability.

```
MUSIC-SHOP/
├── 📂 src/                          # Source code
│   ├── 📂 app/                      # Main application module
│   │   ├── 📂 components/           # Reusable UI components
│   │   │   ├── filter-panel/       # Product filtering component
│   │   │   ├── footer/             # Application footer
│   │   │   ├── header/             # Navigation header
│   │   │   └── product-card/       # Product display card
│   │   │
│   │   ├── 📂 pages/               # Route-based page components
│   │   │   ├── cart/              # Shopping cart management
│   │   │   ├── home/              # Landing page
│   │   │   ├── login/             # User authentication
│   │   │   ├── my-listings/       # User's product listings
│   │   │   ├── product-detail/    # Detailed product view
│   │   │   ├── sell/              # Create new listings
│   │   │   └── signup/            # User registration
│   │   │
│   │   ├── 📂 services/            # Business logic and API calls
│   │   │
│   │   ├── app.component.css      # Root component styles
│   │   ├── app.component.html     # Root component template
│   │   ├── app.component.ts       # Root component logic
│   │   ├── app.config.ts          # Application configuration
│   │   └── app.routes.ts          # Route definitions
│   │
│   ├── 📂 assets/                  # Static assets (images, fonts, etc.)
│   ├── index.html                 # Main HTML entry point
│   ├── main.ts                    # Application bootstrap
│   └── styles.css                 # Global styles
│
├── 📂 node_modules/               # NPM dependencies
├── .gitignore                     # Git ignore rules
├── angular.json                   # Angular CLI configuration
├── db.json                        # Mock database (JSON server)
├── package-lock.json             # Dependency lock file
├── package.json                  # Project dependencies and scripts
├── README.md                     # This file
├── SETUP_COMPLETE.md             # Setup instructions
├── tsconfig.app.json             # TypeScript config for app
├── tsconfig.json                 # TypeScript root config
└── tsconfig.spec.json            # TypeScript config for tests

---


## ✅ Prerequisites

Ensure the following tools are installed before running the project:

- **Node.js** v18 or higher
- **npm** (comes with Node.js) or **yarn**
- **Angular CLI** (optional but recommended)

Install Angular CLI globally if needed:
```bash
npm install -g @angular/cli
````

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/music-instrument-marketplace.git
```

2. Navigate to the project directory:

```bash
cd music-shop
```

3. Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

### Option 1: Using npm scripts (Recommended)

Open **two terminals**.

**Terminal 1 – Start the mock backend:**

```bash
npm run server
```

**Terminal 2 – Start the Angular app:**

```bash
npm start
```

The application will be available at:

```
http://localhost:4200
```


---

## 📜 Available Scripts

| Command          | Description             |
| ---------------- | ----------------------- |
| `npm start`      | Run Angular dev server  |
| `npm run build`  | Build production bundle |
| `npm run watch`  | Continuous build        |
| `npm test`       | Run unit tests          |
| `npm run server` | Start json‑server API   |

---

## 🧠 Feature Implementation Overview

### Implemented

* ✅ Reusable UI components
* ✅ Angular routing with multiple pages
* ✅ Reactive cart updates using RxJS
* ✅ Product filtering system
* ✅ Persistent cart via localStorage
* ✅ Async HTTP data handling

### Notable Challenges Solved

* Synchronizing cart state across unrelated components
* Combining multiple filters efficiently
* Managing application state without external libraries
* Handling page refresh persistence

---

## 🗄 Mock Database (json‑server)

The backend uses **json‑server** to simulate a REST API.

### Sample Endpoints

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/products`     | Fetch all products    |
| GET    | `/products/:id` | Fetch product details |

### Sample Product Object

```json
{
  "id": 1,
  "name": "Electric Guitar",
  "category": "Guitar",
  "price": 799.99,
  "description": "High-quality electric guitar",
  "image": "image-url",
  "condition": "New",
  "rating": 4.7,
  "reviews": 124
}
```

---

## 🎨 Customization Guide

### Add New Products

Edit `db.json` and append items to the `products` array.

### Update Filter Categories

Modify:

```
src/app/components/filter-panel/filter-panel.component.ts
```

### Styling

* Global styles: `src/styles.css`
* Component styles: individual `.css` files


---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Output files will be located in:

```
dist/
```

---

## 🐞 Troubleshooting

### Backend Not Connecting

* Verify json‑server is running on port 3000
* Confirm `db.json` exists at project root

### Dependency Errors

* Run `npm install`
* Restart the dev server

### Port Conflicts

* Angular:

```bash
ng serve --port 4201
```

* json‑server:

```bash
json-server --watch db.json --port 3001
```

---

## 🔮 Future Enhancements

* 🔐 User authentication & authorization
* 💳 Payment gateway integration
* 📦 Order history & checkout flow
* 📝 User reviews & ratings system
* ❤️ Wishlist feature
* 🛠 Admin dashboard
* 📧 Email notifications
* 🔍 Search suggestions & autocomplete

---

## 📄 License

This project is licensed under the **UACS License**.

---

## 👨‍💻 Author

**Music Shop Team**
Vlatko Angelov – 2025

---
