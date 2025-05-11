
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { mockFoodCategories } from '../../data/mockData';
import { Link } from 'react-router-dom';

const FoodCategories = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">หมวดหมู่อาหาร</h2>
      <Carousel>
        <CarouselContent>
          {mockFoodCategories.map((category) => (
            <CarouselItem key={category.id} className="basis-1/3 md:basis-1/5">
              <Link to={`/category/${category.id}`} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-2 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FoodCategories;
