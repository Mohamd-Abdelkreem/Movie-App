

# 🎬 Movie App 🍿


A modern, responsive movie search and discovery app built with React, Vite, and Tailwind CSS. It uses The Movie Database (TMDb) API to fetch and display movie data.


## ✨ Features

- **🖼️ Fullscreen Hero Section**: Eye-catching hero with background image and project title.
- **🔍 Responsive Search Bar**: Dark-themed, mobile-friendly search bar to find movies by title.
- **⚡ Live Search**: Debounced search input for efficient API calls.
- **🔥 Popular Movies**: Displays trending movies by default.
- **🎞️ Movie List & Cards**: Each movie is shown with poster, title, rating, language, and release year.
- **⏳ Loading & Error States**: Shows a spinner while loading and error messages if API fails.
- **💎 Modern UI**: Built with Tailwind CSS, Flowbite React, and Material UI for a beautiful, accessible interface.


## 🛠️ Tech Stack

- **React 19**
- **Vite** (for fast development and build)
- **Tailwind CSS** (utility-first styling)
- **Flowbite React** (UI components)
- **Material UI** (spinner/loading)
- **Axios** (API requests)
- **use-debounce** (debounced search)
- **TMDb API** (movie data)


## 📁 Project Structure

```
movie-app/
├── public/
│   ├── hero.png, logo.png, search.svg, star.svg, no-movie.png, ...
├── src/
│   ├── App.jsx           # Main app layout and logic
│   ├── main.jsx          # React entry point
│   ├── index.css         # Tailwind and global styles
│   └── Components/
│       ├── Search.jsx    # Search bar component
│       ├── MovieList.jsx # Renders list of MovieCard
│       ├── MovieCard.jsx # Individual movie card
│       └── Header.jsx    # (empty, hero is in App.jsx)
├── package.json
├── vite.config.js
└── README.md
```


## 🚀 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohamd-Abdelkreem/Movie-App.git
   cd Movie-App/movie-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up your TMDb API key:**
   - Create a `.env` file in the root with:
     ```
     VITE_TMDB_API_KEY=your_tmdb_api_key_here
     ```
   - You can get a free API key from https://www.themoviedb.org/settings/api
4. **Run the app locally:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).


## 🧩 Component Overview

- **App.jsx**: Main layout, handles API calls, search, and state.
- **Search.jsx**: Responsive, dark search bar with debounced input.
- **MovieList.jsx**: Maps movie data to MovieCard components.
- **MovieCard.jsx**: Displays poster, title, rating, language, and year.
- **Header.jsx**: (Empty, hero is now in App.jsx)

## 🎨 Customization
- You can change the hero image by replacing `public/hero.png`.
- Tailwind and Flowbite are fully customizable via `index.css` and config files.

## 📜 Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code with ESLint


---
