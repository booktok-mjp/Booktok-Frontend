import React, { useState } from 'react';
import { GiArchiveResearch } from 'react-icons/gi';

import { Colors } from '../../../config';
import './SearchBar.css';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-bar mb-5" onSubmit={handleSearch}>
      <div className="input-container">
        <GiArchiveResearch fontSize="40px" color={Colors.wineRed} />
        <input
          type="text"
          placeholder={placeholder || 'Search books and authors...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <button type="submit" className="search-btn" color={Colors.wineRed}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
