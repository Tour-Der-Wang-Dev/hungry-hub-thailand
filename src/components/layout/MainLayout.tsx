
import React, { ReactNode, useState } from 'react';
import MobileHeader from './MobileHeader';
import BottomNavigation from './BottomNavigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <MobileHeader onMenuToggle={() => setSidebarOpen(true)} />
      
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold mb-4">เมนู</h2>
              <nav className="space-y-2">
                <a href="/" className="block px-2 py-3 hover:bg-gray-100 rounded-md">หน้าหลัก</a>
                <a href="/profile" className="block px-2 py-3 hover:bg-gray-100 rounded-md">โปรไฟล์</a>
                <a href="/orders" className="block px-2 py-3 hover:bg-gray-100 rounded-md">ประวัติคำสั่งซื้อ</a>
                <a href="/addresses" className="block px-2 py-3 hover:bg-gray-100 rounded-md">จัดการที่อยู่</a>
                <a href="/favorites" className="block px-2 py-3 hover:bg-gray-100 rounded-md">ร้านอาหารโปรด</a>
                <a href="/settings" className="block px-2 py-3 hover:bg-gray-100 rounded-md">ตั้งค่า</a>
                <a href="/help" className="block px-2 py-3 hover:bg-gray-100 rounded-md">ช่วยเหลือ</a>
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      <main className="flex-1 container px-4 pb-20 pt-2">
        {children}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
