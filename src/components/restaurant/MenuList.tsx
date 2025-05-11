
import React from 'react';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemType, MenuCategory } from '@/data/mockData';

interface MenuListProps {
  items: MenuItemType[];
  category: MenuCategory;
}

const MenuList = ({ items, category }: MenuListProps) => {
  // Filter items by the current category
  const categoryItems = items.filter(item => item.categoryId === category.id);
  
  if (categoryItems.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        ไม่พบรายการอาหารในหมวดหมู่นี้
      </div>
    );
  }

  return (
    <div className="py-2">
      <h3 className="font-bold mb-3">{category.name}</h3>
      <div className="space-y-4">
        {categoryItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
