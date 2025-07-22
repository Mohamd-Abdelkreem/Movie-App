import MovieCard from "./MovieCard";
function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
