
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="ค้นหาร้านอาหารหรือเมนู"
          className="w-full py-3 pl-12 pr-4 bg-gray-100 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
        <Search className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
