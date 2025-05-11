
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PromoCodeInputProps {
  onApply: (code: string) => void;
}

const PromoCodeInput = ({ onApply }: PromoCodeInputProps) => {
  const [code, setCode] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onApply(code.trim());
      setCode('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        placeholder="ใส่รหัสโปรโมชัน"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1"
      />
      <Button 
        type="submit" 
        variant="outline"
        disabled={!code.trim()}
      >
        ใช้โค้ด
      </Button>
    </form>
  );
};

export default PromoCodeInput;
