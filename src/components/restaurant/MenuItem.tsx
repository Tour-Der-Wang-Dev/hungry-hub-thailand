
import React from 'react';
import { MenuItem as MenuItemType } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Link 
      to={`/menu-item/${item.id}`} 
      className="flex items-start p-3 bg-white rounded-lg shadow-sm mb-3 hover:shadow-md transition-shadow"
    >
      <div className="flex-1 mr-3">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
        <p className="text-brand-orange font-medium mt-2">฿{item.price.toFixed(0)}</p>
        {item.options && item.options.length > 0 && (
          <p className="text-xs text-gray-500 mt-1">+ ตัวเลือกเพิ่มเติม</p>
        )}
      </div>
      
      <div className="relative w-20 h-20 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover rounded-md" 
        />
        <Button 
          size="icon" 
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-md bg-brand-orange hover:bg-brand-dark"
          onClick={(e) => {
            e.preventDefault();
            // Add to cart logic would go here
          }}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </Link>
  );
};

export default MenuItem;
