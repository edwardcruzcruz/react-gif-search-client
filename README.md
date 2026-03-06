# 🎬 React GIF Search Client

🌐 **Live Demo:** https://react-gifs-search-client.netlify.app/

Production-ready frontend application built with React, Vite, and TypeScript, integrating the Giphy API to search and display GIFs dynamically.
The project demonstrates clean architecture principles, custom hooks, API abstraction, unit testing, and scalable folder organization.

---

## 🚀 Features

- GIF search powered by Giphy API

- API abstraction layer using Axios

- Custom React hooks for business logic encapsulation

- Component-based architecture

- Search history persistence (previous searches component)

- Unit testing with Vitest and Testing Library

- Mocking external API calls with axios-mock-adapter

- Coverage reporting with Vitest

- Environment variable configuration with .env

- Clean and scalable project structure


---

## 🛠 Tech Stack

- React 19

- TypeScript (strict mode)

- Vite

- SCSS / SASS with CSS Modules (variables, mixins, responsive breakpoints)

- Axios

- Vitest

- Testing Library

- ESLint


---

## 📁 Project Structure

```bash
src/
 ├── gifs/
 │    ├── actions/            # Business logic actions (API calls abstraction)
 │    ├── api/                # Axios configuration and external API integration
 │    ├── components/         # Feature-specific components with .module.scss
 │    ├── hooks/              # Custom React hooks (useGifs)
 │    ├── interfaces/         # TypeScript interfaces and types
 │
 ├── shared/components/       # Reusable UI components with SCSS modules
 ├── styles/                  # SCSS partials (variables, mixins, typography)
 │    ├── _variables.scss
 │    ├── _mixins.scss
 │    └── global.scss         # Global styles
 ├── mock-data/               # Mocked API responses
 ├── main.tsx                 # Application entry point
 ├── GifsApp.tsx              # Root component
 └── index.css                # Global styles(Replaced by SCSS)

test/
 ├── gifs/                    # Unit tests for GIF domain
 ├── shared/components/       # Component tests
 ├── mock-data/               # Mock data for testing
 └── __snapshots__/           # Snapshot testing
```

---

## 🌐 External API Integration

This project integrates with the Giphy API using environment variables.
Create a .env file in the root directory:

```bash
VITE_GIPHY_API_KEY=your_api_key_here
```

An .env.example file is included for reference.

---

## ⚙️ Installation

### 1. Clone the repository:

```bash
git clone https://github.com/edwardcruzcruz/react-gif-search-client.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a .env file with:

```bash
VITE_GIPHY_API_KEY=your_api_key_here
```

### 4. Run the development server:

```bash
npm run dev
```

---

## 🧪 Running Tests

### Run all tests:

```bash
npm run test
```

### Run all tests once:

```bash
npm run test:only
```

### Run the coverage test:

```bash
npm run coverage
```

---

## 🧠 Design Decisions

- ✅ Domain-based folder structure

- ✅ Separation between API layer and UI components

- ✅ Business logic encapsulated inside custom hooks

- ✅ SCSS modules with variables, mixins, and breakpoints for maintainable styling

- ✅ External API mocking for deterministic tests

- ✅ Type-safe interfaces for API responses

- ✅ Build process validates tests before production build

- ✅ Test

- ✅ Deployment on Netlify  


### Build script:

```bash
npm run build
```

Executes:

- Unit tests

- Type checking

- Production build


---

## 🔮 Future Improvements

- Infinite scroll pagination

- Loading skeleton components

- CI/CD pipeline with GitHub Actions

- Add a global React Error Boundary

- Improve centralized API error handling

- Enhance user-friendly error feedback (UI messages)


---

## 📌 Author

**Edward Cruz**

Full Stack Developer | React | Node.js | TypeScript | REST APIs