
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CartItem from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import PromoCodeInput from '@/components/cart/PromoCodeInput';
import { mockMenuItems } from '@/data/mockData';
import { CartItem as CartItemType } from '@/data/mockData';
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { toast } = useToast();
  // Example cart items (in a real app, this would be managed in state or context)
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: "cart-1",
      menuItem: mockMenuItems[0],
      quantity: 1,
      selectedOptions: [
        { optionId: "o1", choiceId: "ch3" },
        { optionId: "o2", choiceId: "ch5" }
      ]
    },
    {
      id: "cart-2",
      menuItem: mockMenuItems[1],
      quantity: 2,
      selectedOptions: [
        { optionId: "o1", choiceId: "ch2" }
      ]
    }
  ]);
  
  const [discount, setDiscount] = useState(0);
  const deliveryFee = 40; // Fixed delivery fee for this example
  
  const handleIncreaseQuantity = (itemId: string) => {
    setCartItems(items => 
      items.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };
  
  const handleDecreaseQuantity = (itemId: string) => {
    setCartItems(items => 
      items.map(item => 
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };
  
  const handleRemoveItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };
  
  const handleApplyPromoCode = (code: string) => {
    // In a real app, this would validate the code against an API
    if (code === "SAVE50") {
      setDiscount(50);
      toast({
        title: "โค้ดส่วนลดถูกใช้งานแล้ว",
        description: "ส่วนลด 50 บาท ถูกใช้งานเรียบร้อยแล้ว",
      });
    } else {
      toast({
        title: "โค้ดส่วนลดไม่ถูกต้อง",
        description: "กรุณาตรวจสอบและลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    }
  };
  
  const handleCheckout = () => {
    // In a real app, this would navigate to the checkout/payment page
    console.log("Proceeding to checkout");
    toast({
      title: "ดำเนินการต่อ",
      description: "กำลังนำท่านไปยังหน้าชำระเงิน",
    });
  };
  
  return (
    <MainLayout>
      <div className="pt-2 pb-6">
        <h1 className="text-xl font-bold mb-4">ตะกร้าสินค้า</h1>
        
        {cartItems.length > 0 ? (
          <>
            <div className="bg-white rounded-lg shadow-sm mb-4">
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onIncrease={() => handleIncreaseQuantity(item.id)}
                  onDecrease={() => handleDecreaseQuantity(item.id)}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))}
            </div>
            
            <PromoCodeInput onApply={handleApplyPromoCode} />
            
            <OrderSummary 
              items={cartItems}
              deliveryFee={deliveryFee}
              discount={discount}
              onCheckout={handleCheckout}
            />
          </>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-600 mb-4">ตะกร้าสินค้าของคุณว่างเปล่า</p>
            <a
              href="/"
              className="inline-block px-4 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-dark"
            >
              เลือกอาหารเลย
            </a>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
