function Search({ searchInput, setSearchInput }) {
  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  return (
    <form
      className="flex items-center bg-[#23272f] rounded-xl shadow-2xl px-6 py-4 gap-4 w-full border-2 border-[#23272f] focus-within:border-blue-500 transition-all duration-200
        sm:px-4 sm:py-3 sm:gap-3
        max-w-full"
      onSubmit={e => e.preventDefault()}
    >
      <img
        src="/search.svg"
        alt="Search Icon"
        className="w-8 h-8 opacity-90 sm:w-6 sm:h-6"
      />
      <input
        type="text"
        className="flex-1 outline-none bg-transparent px-3 py-2 text-2xl text-white placeholder-gray-400
          sm:text-lg sm:px-2 sm:py-1"
        placeholder="Search through thousands of movies"
        value={searchInput}
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
