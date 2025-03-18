// components/menu-item.tsx
'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/features/cart/cartSlice';
import { PlusIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuSectionProps {
  item: MenuItem;
}

export function MenuItem({ item }: Readonly<MenuSectionProps>) {
  const dispatch = useDispatch();

  return (
    <Card key={item.id} className='flex flex-row overflow-hidden'>
      {/* Image Section - Left Side */}
      <div className='relative  flex-none max-w-[150px] md:max-w-[200px]'>
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-full object-cover aspect-square md:aspect-auto'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent' />
      </div>

      {/* Content Section - Right Side */}
      <div className='flex-1 p-4 flex flex-col justify-between'>
        <CardHeader className='font-medium text-lg p-0 mb-2'>
          {item.name}
        </CardHeader>

        <CardContent className='p-0 flex flex-col'>
          <div className='mt-auto flex justify-between items-center'>
            <p className='font-medium text-primary'>${item.price.toFixed(2)}</p>
            <Button
              size='sm'
              onClick={() =>
                dispatch(
                  addItem({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                  })
                )
              }
            >
              <PlusIcon size={16} />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
