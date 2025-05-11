
import React from 'react';
import { CartItem } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface OrderSummaryProps {
  items: CartItem[];
  deliveryFee: number;
  discount?: number;
  onCheckout: () => void;
}

const OrderSummary = ({ items, deliveryFee, discount = 0, onCheckout }: OrderSummaryProps) => {
  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    let itemTotal = item.menuItem.price * item.quantity;
    
    // Add prices for selected options
    if (item.selectedOptions && item.selectedOptions.length > 0) {
      item.selectedOptions.forEach(selected => {
        const option = item.menuItem.options?.find(opt => opt.id === selected.optionId);
        if (option) {
          const choice = option.choices.find(c => c.id === selected.choiceId);
          if (choice) {
            itemTotal += choice.price * item.quantity;
          }
        }
      });
    }
    
    return total + itemTotal;
  }, 0);
  
  // Calculate total
  const total = subtotal + deliveryFee - discount;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold mb-3">สรุปรายการสั่งซื้อ</h2>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span>ราคารวมอาหาร</span>
          <span>฿{subtotal.toFixed(0)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>ค่าจัดส่ง</span>
          <span>฿{deliveryFee.toFixed(0)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>ส่วนลด</span>
            <span>-฿{discount.toFixed(0)}</span>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
          <span>รวมทั้งสิ้น</span>
          <span>฿{total.toFixed(0)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-brand-orange hover:bg-brand-dark" 
        onClick={onCheckout}
        disabled={items.length === 0}
      >
        ดำเนินการชำระเงิน
      </Button>
    </div>
  );
};

export default OrderSummary;
