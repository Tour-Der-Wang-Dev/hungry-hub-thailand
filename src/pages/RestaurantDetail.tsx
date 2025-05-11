
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import RestaurantHeader from '@/components/restaurant/RestaurantHeader';
import MenuCategories from '@/components/restaurant/MenuCategories';
import MenuList from '@/components/restaurant/MenuList';
import { mockRestaurants, mockMenuItems, mockMenuCategories } from '@/data/mockData';

const RestaurantDetail = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const restaurant = mockRestaurants.find(r => r.id === restaurantId);
  
  // Filter menu items and categories for this restaurant
  const restaurantMenuItems = mockMenuItems.filter(item => item.restaurantId === restaurantId);
  const restaurantCategories = mockMenuCategories.filter(cat => cat.restaurantId === restaurantId);
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState(
    restaurantCategories.length > 0 ? restaurantCategories[0].id : ''
  );
  
  if (!restaurant) {
    return (
      <MainLayout>
        <div className="p-4 text-center">
          <p>ไม่พบร้านอาหาร</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <RestaurantHeader restaurant={restaurant} />
      
      {restaurantCategories.length > 0 && (
        <>
          <MenuCategories 
            categories={restaurantCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="py-2">
            {restaurantCategories.map(category => (
              <MenuList 
                key={category.id}
                category={category} 
                items={restaurantMenuItems} 
              />
            ))}
          </div>
        </>
      )}
      
      {restaurantCategories.length === 0 && (
        <div className="p-4 text-center text-gray-500">
          <p>ไม่พบรายการอาหาร</p>
        </div>
      )}
    </MainLayout>
  );
};

export default RestaurantDetail;
