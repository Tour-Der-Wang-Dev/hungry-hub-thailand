
import React from 'react';
import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const isActive = (route: string) => {
    return path === route;
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200">
      <div className="flex justify-between items-center px-6 py-2">
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-brand-orange' : 'text-gray-500'}`}>
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">หน้าหลัก</span>
        </Link>
        
        <Link to="/search" className={`flex flex-col items-center ${isActive('/search') ? 'text-brand-orange' : 'text-gray-500'}`}>
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">ค้นหา</span>
        </Link>
        
        <Link to="/cart" className={`flex flex-col items-center ${isActive('/cart') ? 'text-brand-orange' : 'text-gray-500'}`}>
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs mt-1">ตะกร้า</span>
        </Link>
        
        <Link to="/favorites" className={`flex flex-col items-center ${isActive('/favorites') ? 'text-brand-orange' : 'text-gray-500'}`}>
          <Heart className="h-6 w-6" />
          <span className="text-xs mt-1">รายการโปรด</span>
        </Link>
        
        <Link to="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'text-brand-orange' : 'text-gray-500'}`}>
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">โปรไฟล์</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;
