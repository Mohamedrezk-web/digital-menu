// components/ItemCustomizationDrawer.tsx
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/features/cart/cartSlice';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { X as XIcon } from 'lucide-react';

export interface OptionChoice {
  name: string;
  additionalPrice: number;
}

export interface OptionCategory {
  name: string;
  choices: OptionChoice[];
  required: boolean;
  multiple?: boolean; // false or undefined for single choice (radio), true for multiple (checkbox)
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  options?: OptionCategory[];
}

interface ItemCustomizationDrawerProps {
  item: MenuItem;
}

export function ItemCustomizationDrawer({
  item,
}: ItemCustomizationDrawerProps) {
  const dispatch = useDispatch();

  // State to track the selected options for each category.
  // For radio groups, the value will be a single string (wrapped in an array for consistency),
  // while checkboxes will allow multiple selections.
  const [selectedOptions, setSelectedOptions] = useState<{
    [category: string]: string[];
  }>({});

  const handleCheckboxChange = (
    categoryName: string,
    choiceName: string,
    checked: boolean
  ) => {
    setSelectedOptions((prev) => {
      const current = prev[categoryName] || [];
      if (checked) {
        return { ...prev, [categoryName]: [...current, choiceName] };
      } else {
        return {
          ...prev,
          [categoryName]: current.filter((c) => c !== choiceName),
        };
      }
    });
  };

  const handleRadioChange = (categoryName: string, choiceName: string) => {
    setSelectedOptions((prev) => ({ ...prev, [categoryName]: [choiceName] }));
  };

  const handleAddToCart = () => {
    // Build the selected options array for the cart payload.
    const selectedOptionsArray =
      item.options
        ?.map((optionGroup) => {
          const selected = selectedOptions[optionGroup.name] || [];
          return {
            category: optionGroup.name,
            selectedChoices: optionGroup.choices.filter((choice) =>
              selected.includes(choice.name)
            ),
          };
        })
        .filter((option) => option.selectedChoices.length > 0) || [];

    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        basePrice: item.price,
        selectedOptions: selectedOptionsArray,
      })
    );
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Add to Cart</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm overflow-y-auto'>
          <img
            src={item.image}
            alt={item.name}
            className='w-full h-64 object-cover rounded-lg mb-4'
          />
          <div className='p-4 pt-0 flex flex-col '>
            <DrawerTitle className='text-3xl font-bold'>
              {item.name}
            </DrawerTitle>
            <p className='text-muted-foreground mb-4'>{item.description}</p>

            <Separator className='my-4' />

            {item.options?.map((optionGroup, idx) => (
              <div key={idx} className='mb-6'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-medium'>{optionGroup.name}</span>
                  <Badge variant={optionGroup.required ? 'default' : 'outline'}>
                    {optionGroup.required ? 'Required' : 'Optional'}
                  </Badge>
                </div>

                {optionGroup.multiple ? (
                  // Multi-choice: render checkboxes
                  <div className=''>
                    {optionGroup.choices.map((choice, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <Checkbox
                          checked={
                            selectedOptions[optionGroup.name]?.includes(
                              choice.name
                            ) || false
                          }
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(
                              optionGroup.name,
                              choice.name,
                              Boolean(checked)
                            )
                          }
                        />
                        <label className='cursor-pointer'>
                          {choice.name}
                          {choice.additionalPrice > 0 && (
                            <span className='ml-1 text-sm'>
                              (+${choice.additionalPrice.toFixed(2)})
                            </span>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Single-choice: render radio buttons
                  <RadioGroup
                    value={selectedOptions[optionGroup.name]?.[0] || ''}
                    onValueChange={(value) =>
                      handleRadioChange(optionGroup.name, value)
                    }
                    className='flex flex-col '
                  >
                    {optionGroup.choices.map((choice, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <RadioGroupItem
                          value={choice.name}
                          id={`${optionGroup.name}-${choice.name}`}
                        />
                        <label
                          htmlFor={`${optionGroup.name}-${choice.name}`}
                          className='cursor-pointer'
                        >
                          {choice.name}
                          {choice.additionalPrice > 0 && (
                            <span className='ml-1 text-sm'>
                              (+${choice.additionalPrice.toFixed(2)})
                            </span>
                          )}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </div>
            ))}

            <div className='flex justify-end '>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
