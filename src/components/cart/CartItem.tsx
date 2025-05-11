
import React from 'react';
import { Minus, Plus, Trash } from 'lucide-react';
import { CartItem as CartItemType } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem = ({ item, onIncrease, onDecrease, onRemove }: CartItemProps) => {
  // Calculate the total price for this item including options
  const calculateTotalPrice = () => {
    let total = item.menuItem.price * item.quantity;
    
    // Add prices for selected options
    if (item.selectedOptions && item.selectedOptions.length > 0) {
      item.selectedOptions.forEach(selected => {
        const option = item.menuItem.options?.find(opt => opt.id === selected.optionId);
        if (option) {
          const choice = option.choices.find(c => c.id === selected.choiceId);
          if (choice) {
            total += choice.price * item.quantity;
          }
        }
      });
    }
    
    return total;
  };
  
  // Format selected options for display
  const formatSelectedOptions = () => {
    if (!item.selectedOptions || item.selectedOptions.length === 0) {
      return null;
    }
    
    return item.selectedOptions.map(selected => {
      const option = item.menuItem.options?.find(opt => opt.id === selected.optionId);
      const choice = option?.choices.find(c => c.id === selected.choiceId);
      
      if (option && choice) {
        return (
          <div key={`${selected.optionId}-${selected.choiceId}`} className="text-xs text-gray-600">
            {option.name}: {choice.name} 
            {choice.price > 0 && <span> (+฿{choice.price})</span>}
          </div>
        );
      }
      return null;
    });
  };
  
  return (
    <div className="flex p-3 border-b border-gray-200">
      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.menuItem.image}
          alt={item.menuItem.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">{item.menuItem.name}</h3>
            {formatSelectedOptions()}
            {item.specialInstructions && (
              <p className="text-xs text-gray-500 mt-1">
                หมายเหตุ: {item.specialInstructions}
              </p>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onRemove} 
            className="h-6 w-6 text-gray-500 -mt-1"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-none"
              onClick={onDecrease}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="px-2 text-sm">{item.quantity}</span>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-none"
              onClick={onIncrease}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="text-sm font-medium">
            ฿{calculateTotalPrice().toFixed(0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
