
import React from 'react';
import { Star, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Restaurant } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  return (
    <div className="relative">
      <div className="relative h-48">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover" 
        />
        <Link 
          to="/"
          className="absolute top-4 left-4 bg-white rounded-full p-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>
      
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold">{restaurant.name}</h1>
        
        <div className="flex items-center text-sm mt-1">
          <div className="flex items-center text-yellow-500 mr-3">
            <Star className="h-4 w-4 fill-yellow-400" />
            <span className="ml-1">{restaurant.rating}</span>
          </div>
          
          <div className="text-gray-600">
            {restaurant.categories.join(' • ')}
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <div className="flex items-center mr-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{restaurant.distance}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{restaurant.estimatedDeliveryTime}</span>
          </div>
        </div>
        
        <div className="mt-2 text-sm">
          <div className="flex items-center text-gray-600">
            <span className="text-gray-900 font-medium mr-2">เวลาทำการ:</span>
            <span>{restaurant.openingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
