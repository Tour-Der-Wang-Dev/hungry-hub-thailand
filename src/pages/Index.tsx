
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SearchBar from '@/components/home/SearchBar';
import PromotionCarousel from '@/components/home/PromotionCarousel';
import FoodCategories from '@/components/home/FoodCategories';
import RestaurantList from '@/components/home/RestaurantList';

const Index = () => {
  return (
    <MainLayout>
      <SearchBar />
      <PromotionCarousel />
      <FoodCategories />
      <RestaurantList />
    </MainLayout>
  );
};

export default Index;
