
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  User, Settings, ShoppingBag, MapPin, 
  CreditCard, LogOut, Heart, Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ProfileSection = ({ 
  icon, 
  title, 
  description, 
  to 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  to: string 
}) => (
  <Link to={to} className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-3 hover:shadow-md transition-shadow">
    <div className="mr-4 text-brand-orange">{icon}</div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </Link>
);

const Profile = () => {
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "ออกจากระบบสำเร็จ",
      description: "ขอบคุณที่ใช้บริการ"
    });
  };
  
  return (
    <MainLayout>
      <div className="pt-2 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">โปรไฟล์</h1>
          <Button asChild variant="outline" size="sm">
            <Link to="/profile/edit">แก้ไขโปรไฟล์</Link>
          </Button>
        </div>
        
        <div className="flex flex-col items-center mb-6 p-6 bg-white rounded-lg shadow-sm">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3">
            <User className="h-10 w-10 text-gray-500" />
          </div>
          <h2 className="text-lg font-semibold">คุณสมชาย ใจดี</h2>
          <p className="text-gray-600">somchai@example.com</p>
          <p className="text-gray-600">081-234-5678</p>
        </div>
        
        <h2 className="text-lg font-semibold mb-3">บัญชีของฉัน</h2>
        
        <div className="space-y-3 mb-6">
          <ProfileSection 
            icon={<ShoppingBag className="h-6 w-6" />}
            title="ประวัติคำสั่งซื้อ"
            description="ดูประวัติการสั่งอาหารทั้งหมดของคุณ"
            to="/orders"
          />
          
          <ProfileSection 
            icon={<MapPin className="h-6 w-6" />}
            title="จัดการที่อยู่"
            description="เพิ่ม แก้ไข หรือลบที่อยู่จัดส่งของคุณ"
            to="/addresses"
          />
          
          <ProfileSection 
            icon={<CreditCard className="h-6 w-6" />}
            title="วิธีการชำระเงิน"
            description="จัดการบัตรเครดิต/เดบิตของคุณ"
            to="/payment-methods"
          />
          
          <ProfileSection 
            icon={<Heart className="h-6 w-6" />}
            title="ร้านอาหารโปรด"
            description="ดูรายการร้านอาหารที่คุณชื่นชอบ"
            to="/favorites"
          />
        </div>
        
        <h2 className="text-lg font-semibold mb-3">การตั้งค่า</h2>
        
        <div className="space-y-3 mb-6">
          <ProfileSection 
            icon={<Bell className="h-6 w-6" />}
            title="การแจ้งเตือน"
            description="จัดการการแจ้งเตือนของแอพ"
            to="/notification-settings"
          />
          
          <ProfileSection 
            icon={<Settings className="h-6 w-6" />}
            title="ตั้งค่าแอพ"
            description="ภาษา ธีม และตัวเลือกความเป็นส่วนตัว"
            to="/app-settings"
          />
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-red-500 text-red-500 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          ออกจากระบบ
        </Button>
      </div>
    </MainLayout>
  );
};

export default Profile;
