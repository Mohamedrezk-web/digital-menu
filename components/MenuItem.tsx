'use client';
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/features/cart/cartSlice';
import { ItemCustomizationDrawer } from './ItemCustomizationModal';

export interface OptionChoice {
  name: string;
  additionalPrice: number;
}

export interface OptionCategory {
  name: string;
  choices: OptionChoice[];
  required: boolean;
  multiple: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  options?: OptionCategory[];
}

interface MenuSectionProps {
  item: MenuItem;
  isLast?: boolean;
}

export function MenuItem({ item }: Readonly<MenuSectionProps>) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        basePrice: item.price,
        selectedOptions: item.options ? [] : undefined,
      })
    );
  };

  return (
    <div className='flex items-center gap-4'>
      <div className='relative flex-none w-20 h-20'>
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-full object-cover rounded-lg'
          loading='lazy'
        />
      </div>

      <div className='flex flex-col gap-1 w-[calc(100%-6rem)]'>
        <h3 className='font-medium text-lg'>{item.name}</h3>
        <p className='text-sm text-muted-foreground w-full overflow-hidden text-ellipsis whitespace-nowrap'>
          {item.description}
        </p>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-primary'>${item.price.toFixed(2)}</p>
          <ItemCustomizationDrawer item={item} />

          {/* <Button
            variant='ghost'
            size='sm'
            className='rounded-full'
            onClick={handleAddToCart}
          >
            <PlusIcon size={16} />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
