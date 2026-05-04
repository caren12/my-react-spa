function SearchBar({ setSearchTerm }) {
  return (
    <input
      type='text'
      placeholder='Search Projects'
      className='search'
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;