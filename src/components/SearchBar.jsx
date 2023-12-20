import React from 'react';

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        className="form-control"
        placeholder="SEARCH RECIPE"
        disabled={isLoading}
        onChange={onChange}
      />
      <input
        className="btn"
        type="submit"
        value="Search"
        disabled={isLoading || !value}
      />
    </form>
  );
};

export default SearchBar;
