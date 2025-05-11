
import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import Logo from '../Logo';
import { mockAddresses } from '../../data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MobileHeaderProps {
  onMenuToggle?: () => void;
}

const MobileHeader = ({ onMenuToggle }: MobileHeaderProps) => {
  // Get default address from mock data
  const defaultAddress = mockAddresses.find(address => address.isDefault);
  
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="container px-4 py-3">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuToggle}>
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex-1 flex justify-center md:justify-start">
            <Logo />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {defaultAddress && (
          <Link to="/addresses" className="flex items-center mt-2 text-sm text-gray-700">
            <span className="font-medium mr-1">จัดส่งที่:</span>
            <span className="truncate max-w-[200px]">{defaultAddress.label}</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
