# Music Instrument Marketplace

A modern music instrument marketplace built with Angular and TypeScript.

## Features

- 🎵 **Browse Instruments** - Explore a wide variety of musical instruments
- 🔍 **Advanced Filtering** - Filter by category, condition, and price range
- 🛒 **Shopping Cart** - Add items to cart and manage quantities
- 📦 **Product Details** - Detailed product pages with ratings and reviews
- 💾 **Local Storage** - Cart persists across sessions
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend Framework**: Angular 18
- **Language**: TypeScript
- **Styling**: CSS3 with Flexbox/Grid
- **State Management**: RxJS Observables
- **Backend**: json-server (mock API)
- **Build Tool**: Angular CLI

## Project Structure

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
├── index.html
├── main.ts
└── styles.css
```

## Prerequisites

- Node.js (v18+)
- npm or yarn

## Installation

1. Navigate to the project directory:
```bash
cd music-shop
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Option 1: Using npm scripts (Recommended)

Open two terminals:

**Terminal 1 - Start the backend server:**
```bash
npm run server
```

**Terminal 2 - Start the Angular app:**
```bash
npm start
```

The app will open automatically at `http://localhost:4200`

### Option 2: Manual commands

**Terminal 1 - Backend:**
```bash
json-server --watch db.json --port 3000
```

**Terminal 2 - Frontend:**
```bash
ng serve --open
```

## Available Scripts

- `npm start` - Start Angular dev server with hot reload
- `npm run build` - Build for production
- `npm run watch` - Watch mode build
- `npm test` - Run unit tests
- `npm run server` - Start json-server backend

## Features Implementation

### Core Features
✅ Component-based architecture with 6+ reusable components
✅ Client-side routing with multiple pages
✅ State management with RxJS services
✅ Responsive design (mobile & desktop)
✅ User interactions (filtering, cart management)
✅ Async data handling (HTTP requests, localStorage)

### Interesting Technical Challenges
✅ Real-time cart updates across components using Observables
✅ Advanced filtering system
✅ Persistent cart storage with localStorage
✅ Dynamic product detail pages
✅ Form handling and state management

## Database

The project uses `json-server` for a mock REST API. Product data is stored in `db.json` with sample music instruments.

### Available Endpoints
- `GET /products` - Get all products
- `GET /products/:id` - Get single product

## Customization

### Adding More Products

Edit `db.json` and add new products to the `products` array:

```json
{
  "id": 9,
  "name": "Product Name",
  "category": "Category",
  "price": 999.99,
  "description": "Description",
  "image": "image-url",
  "condition": "New",
  "rating": 4.5,
  "reviews": 100
}
```

### Modifying Categories

Update the categories array in `src/app/components/filter-panel/filter-panel.component.ts`

### Styling

Global styles are in `src/styles.css`. Component-specific styles are in individual `.css` files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Build for production:
```bash
npm run build
```

The build artifacts are stored in the `dist/` directory.

## Troubleshooting

### Backend not connecting
- Make sure json-server is running on port 3000
- Check that `db.json` exists in the root directory

### Module not found errors
- Run `npm install` to ensure all dependencies are installed
- Restart the Angular dev server

### Port already in use
- Angular: Change port with `ng serve --port 4201`
- json-server: Change port with `json-server --watch db.json --port 3001`

## Future Enhancements

- [ ] User authentication
- [ ] Payment integration
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Search suggestions

## License

MIT

## Author

Music Shop Team - School Project 2025
