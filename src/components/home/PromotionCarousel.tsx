
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { mockPromotions } from '../../data/mockData';

const PromotionCarousel = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">โปรโมชันพิเศษ</h2>
      <Carousel>
        <CarouselContent>
          {mockPromotions.map((promo) => (
            <CarouselItem key={promo.id} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-32 object-cover" 
                />
                <div className="p-3">
                  <h3 className="font-semibold">{promo.title}</h3>
                  <p className="text-sm text-gray-600">{promo.description}</p>
                  <p className="text-xs mt-2 text-brand-orange">รหัส: {promo.code}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </div>
  );
};

export default PromotionCarousel;
