# 🎸 Music Instrument Marketplace

A **full‑featured, modern music instrument marketplace** built with **Angular 18** and **TypeScript**. This project simulates a real‑world e‑commerce application where users can browse, filter, and purchase musical instruments using a clean, responsive UI and a mock REST API backend.

This repository represents a **complete frontend project**, suitable for academic submission, portfolio presentation, or as a foundation for a production‑ready application.

---

## 📸 Preview

> *Add screenshots or a demo GIF here to showcase the UI (Home, Product Details, Cart, Mobile View).*
> Example:

```
/assets/screenshots/home.png
/assets/screenshots/cart.png
```

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

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── product-card/
│   │   └── filter-panel/
│   ├── pages/
│   │   ├── home/
│   │   ├── product-detail/
│   │   └── cart/
│   ├── services/
│   │   ├── product.service.ts
│   │   └── cart.service.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── index.html
├── main.ts
└── styles.css
```

---

## ✅ Prerequisites

Ensure the following tools are installed before running the project:

* **Node.js** v18 or higher
* **npm** (comes with Node.js) or **yarn**
* **Angular CLI** (optional but recommended)

Install Angular CLI globally if needed:

```bash
npm install -g @angular/cli
```

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

### Option 2: Manual Commands

**Backend:**

```bash
json-server --watch db.json --port 3000
```

**Frontend:**

```bash
ng serve --open
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

## 🌐 Browser Support

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Microsoft Edge (latest)

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
ng serve 
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

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Music Shop Team**
School Project – 2025


