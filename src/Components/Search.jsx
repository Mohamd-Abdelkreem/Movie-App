function Search({ searchInput, setSearchInput }) {
  function handleChange(e) {
    console.log("Changing");

    setSearchInput(e.target.value);
  }
  return (
    <div className="search">
      <div>
        <img src="../../public/search.svg" />
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
