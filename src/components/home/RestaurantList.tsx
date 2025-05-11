
import React from 'react';
import RestaurantCard from './RestaurantCard';
import { mockRestaurants } from '@/data/mockData';

const RestaurantList = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">ร้านยอดนิยม</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
