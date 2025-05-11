
import React from 'react';
import { Star } from 'lucide-react';
import { Restaurant } from '@/data/mockData';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block mb-4">
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <div className="relative">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-32 object-cover" 
          />
          {!restaurant.isOpen && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-medium px-3 py-1">ปิดแล้ว</span>
            </div>
          )}
        </div>
        <div className="p-3">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-gray-900 truncate">{restaurant.name}</h3>
            <span className="flex items-center text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              {restaurant.rating}
            </span>
          </div>
          
          <div className="flex flex-wrap text-sm text-gray-600 mt-1">
            <span className="mr-2">{restaurant.categories.join(', ')}</span>
            <span>•</span>
            <span className="mx-2">{restaurant.priceLevel}</span>
          </div>
          
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>{restaurant.distance}</span>
            <span>{restaurant.estimatedDeliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
