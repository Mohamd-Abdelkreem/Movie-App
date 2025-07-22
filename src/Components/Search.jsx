function Search({ searchInput, setSearchInput }) {
  function handleChange(e) {

    setSearchInput(e.target.value);
  }
  return (
    <div className="search mt-15">
      <div>
        <img src="/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
