
import React from 'react';
import { MenuCategory } from '@/data/mockData';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuCategoriesProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const MenuCategories = ({ categories, activeCategory, onCategoryChange }: MenuCategoriesProps) => {
  return (
    <div className="px-4 mb-4 -mx-4 overflow-x-auto">
      <Tabs value={activeCategory} onValueChange={onCategoryChange} className="w-full">
        <TabsList className="inline-flex w-max space-x-1 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="px-4 py-2 data-[state=active]:bg-brand-orange data-[state=active]:text-white rounded-full"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MenuCategories;
