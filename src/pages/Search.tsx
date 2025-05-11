
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';
import { mockRestaurants, Restaurant } from '@/data/mockData';
import RestaurantCard from '@/components/home/RestaurantCard';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Filter options
  const [filters, setFilters] = useState({
    minRating: 0,
    priceLevel: '',
    categories: [] as string[],
  });
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Filter restaurants based on search query
      const results = mockRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults(results);
      setHasSearched(true);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  };
  
  // Get all unique categories from mock data
  const allCategories = Array.from(
    new Set(mockRestaurants.flatMap(r => r.categories))
  ).sort();
  
  // Toggle a category filter
  const toggleCategoryFilter = (category: string) => {
    setFilters(prev => {
      const isSelected = prev.categories.includes(category);
      return {
        ...prev,
        categories: isSelected
          ? prev.categories.filter(c => c !== category)
          : [...prev.categories, category]
      };
    });
  };
  
  // Apply filters to search results
  const filteredResults = searchResults.filter(restaurant => {
    // Apply rating filter
    if (restaurant.rating < filters.minRating) {
      return false;
    }
    
    // Apply price level filter
    if (filters.priceLevel && restaurant.priceLevel !== filters.priceLevel) {
      return false;
    }
    
    // Apply category filters
    if (filters.categories.length > 0 && 
        !restaurant.categories.some(cat => filters.categories.includes(cat))) {
      return false;
    }
    
    return true;
  });
  
  return (
    <MainLayout>
      <div className="pt-2 pb-6">
        <h1 className="text-xl font-bold mb-4">ค้นหา</h1>
        
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="ค้นหาร้านอาหารหรือประเภทอาหาร"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          <Button 
            className="absolute right-1 top-1 h-8"
            onClick={handleSearch}
          >
            ค้นหา
          </Button>
        </div>
        
        {hasSearched && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">ตัวกรอง</h2>
            
            <div className="space-y-3">
              {/* Rating filter */}
              <div>
                <h3 className="text-sm font-medium mb-1">คะแนน</h3>
                <div className="flex space-x-2">
                  {[0, 3, 3.5, 4, 4.5].map(rating => (
                    <Button
                      key={rating}
                      variant={filters.minRating === rating ? "default" : "outline"}
                      size="sm"
                      className={filters.minRating === rating ? "bg-brand-orange" : ""}
                      onClick={() => setFilters({...filters, minRating: rating})}
                    >
                      {rating === 0 ? 'ทั้งหมด' : `${rating}+`}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Price level filter */}
              <div>
                <h3 className="text-sm font-medium mb-1">ราคา</h3>
                <div className="flex space-x-2">
                  <Button
                    variant={filters.priceLevel === '' ? "default" : "outline"}
                    size="sm"
                    className={filters.priceLevel === '' ? "bg-brand-orange" : ""}
                    onClick={() => setFilters({...filters, priceLevel: ''})}
                  >
                    ทั้งหมด
                  </Button>
                  {['$', '$$', '$$$'].map(price => (
                    <Button
                      key={price}
                      variant={filters.priceLevel === price ? "default" : "outline"}
                      size="sm"
                      className={filters.priceLevel === price ? "bg-brand-orange" : ""}
                      onClick={() => setFilters({...filters, priceLevel: price})}
                    >
                      {price}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Categories filter */}
              <div>
                <h3 className="text-sm font-medium mb-1">ประเภทอาหาร</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(category => (
                    <Button
                      key={category}
                      variant={filters.categories.includes(category) ? "default" : "outline"}
                      size="sm"
                      className={filters.categories.includes(category) ? "bg-brand-orange" : ""}
                      onClick={() => toggleCategoryFilter(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {hasSearched && (
          <div>
            <h2 className="text-lg font-semibold mb-3">ผลการค้นหา</h2>
            
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {filteredResults.map(restaurant => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600">ไม่พบผลลัพธ์สำหรับการค้นหานี้</p>
              </div>
            )}
          </div>
        )}
        
        {!hasSearched && (
          <div className="text-center py-12">
            <p className="text-gray-600">ค้นหาร้านอาหารหรือประเภทอาหารที่คุณต้องการ</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Search;
