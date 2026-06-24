# Car Showroom

A virtual car showroom SPA built with React and TypeScript. Browse vehicles, filter by brand, price and rating, and leave reviews.

🔗 **[Live Demo](https://car-showroom-zeta.vercel.app/)**

---

## Features

- Vehicle catalog with cards and filtering by search, brand, price range and rating
- Individual vehicle page with image gallery, specs and reviews
- Review form with validation (react-hook-form + zod)
- User reviews saved to localStorage and persisted across page reloads
- Skeleton loaders and error/not-found states
- Responsive layout from 420px to 1440px

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **TanStack Query** — server state management
- **Axios** — HTTP client
- **react-hook-form** + **zod** — form validation
- **SCSS Modules** — styling
- **React Router v8** — routing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/KirillPitomets/car-showroom.git
cd car-showroom
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_VEHICLE_API_URL=https://dummyjson.com/products/
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── api/            # Axios instance, fetchers, TanStack Query hooks
├── app/            # Router, providers
├── components/     # Feature components (VehicleCard, ReviewForm, etc.)
│   └── ui/         # Generic UI components (Button, Input, StarRating, etc.)
├── hooks/          # Custom hooks
├── pages/          # Page components
├── schemes/        # Zod validation schemas
├── styles/         # Global styles and variables
└── utils/          # Utilities (localStorage, helpers)
```
