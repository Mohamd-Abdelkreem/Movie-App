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

        // console.log(response);

        if (response.status !== 200) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // console.log(response.data.results);

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
      <div className="wrapper">
        <Header />
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <section className="all-movies">
        <h2 className="mt-[20px] text-center text-4xl">All Movies</h2>
        {isLoading ? (
          <div>
            {" "}
            <CircularProgress />
          </div>
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <MovieList movies={movieList} />
        )}
      </section>
    </div>
  );
}

export default App;
