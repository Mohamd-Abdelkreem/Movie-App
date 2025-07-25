import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./Components/Search";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useDebounce } from "use-debounce";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchInput] = useDebounce(searchInput, 500);
  useEffect(() => {
    async function fetchData(query = "") {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const endpoint = query
          ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
          : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await axios.get(endpoint, API_OPTIONS);


        if (response.status !== 200) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }


        setMovieList(response.data.results);
      } catch (error) {
        setErrorMessage(
          error?.response?.data?.status_message ||
            error.message ||
            "An error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(debouncedSearchInput);
  }, [debouncedSearchInput]);
  return (
    <div className="pattern">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#181818] to-transparent mb-2">
        <img
          src="/hero.png"
          alt="Hero Logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] max-w-[90vw] opacity-70 z-0 select-none pointer-events-none"
          style={{ objectFit: 'contain' }}
        />
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <h1 className="text-7xl font-extrabold text-center mt-20 mb-10 drop-shadow-2xl [@media(max-width:515px)]:text-4xl">
            Your Next <span className="text-gradient">Movie</span> Awaits!
            <br />
            <span className="text-2xl font-semibold">Watch. Enjoy. Repeat.</span>
          </h1>
        </div>
      </section>
      {/* Search Bar Section - closer to movies list */}
      <div className="flex justify-center w-full mb-8 px-4">
        <div className="w-full max-w-2xl">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
      </div>
      {/* Movies Section */}
      <section className="all-movies">
        <h2 className="mt-[20px] text-center text-4xl">All Movies</h2>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <CircularProgress />
          </div>
        ) : errorMessage ? (
          <p className="text-red-500 text-center py-8">{errorMessage}</p>
        ) : (
          <MovieList movies={movieList} />
        )}
      </section>
    </div>
  );
}

export default App;
