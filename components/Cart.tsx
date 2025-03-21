'use client';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  clearCart,
} from '@/app/features/cart/cartSlice';
import { X, ShoppingCart, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='fixed right-4 bottom-4 z-50'>
      <Button
        variant='default'
        size='lg'
        className='rounded-full w-14 h-14 relative shadow-lg'
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <ShoppingCart className='h-6 w-6' />
        {itemCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs'>
            {itemCount}
          </span>
        )}
      </Button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='absolute right-0 bottom-20 w-80 bg-background border rounded-lg p-4 shadow-lg'
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Your Cart</h2>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => dispatch(clearCart())}
              >
                Clear
              </Button>
            </div>

            {cartItems.length === 0 ? (
              <p className='text-muted-foreground'>Your cart is empty</p>
            ) : (
              <>
                <div className='space-y-4 mb-4 max-h-96 overflow-y-auto'>
                  {cartItems.map((item) => (
                    <div className='flex flex-col gap-2' key={item.id}>
                      <div className='flex justify-between items-center gap-2'>
                        <p className='font-medium'>{item.name}</p>
                        <div className='flex items-center gap-2'>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </Button>
                          <span className='text-sm w-6 text-center'>
                            {item.quantity}
                          </span>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </Button>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <X className='h-4 w-4' />
                          </Button>
                        </div>
                      </div>
                      <div className='flex flex-col justify-between gap-1 relative'>
                        <p className='text-sm text-muted-foreground mt-1'>
                          ${item.basePrice.toFixed(2)} x {item.quantity}
                        </p>

                        {(item.selectedOptions ?? []).length > 0 && (
                          <Collapsible>
                            <CollapsibleTrigger className='absolute right-0 top-0'>
                              <Button variant='ghost' size='sm'>
                                <ChevronsUpDown className='h-4 w-4' />
                                <span className='sr-only'>Toggle</span>
                              </Button>{' '}
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              {(item.selectedOptions ?? []).map((option) => (
                                <div
                                  key={option.category}
                                  className='text-xs text-muted-foreground ml-2'
                                >
                                  <span className='font-medium'>
                                    {option.category}:{' '}
                                  </span>
                                  {option.selectedChoices.map(
                                    (choice, index) => (
                                      <span key={choice.name}>
                                        {choice.name} (+$
                                        {choice.additionalPrice.toFixed(2)})
                                        {index !==
                                        option.selectedChoices.length - 1
                                          ? ', '
                                          : ''}
                                      </span>
                                    )
                                  )}
                                </div>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className='border-t pt-4'>
                  <div className='flex justify-between font-bold'>
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button className='w-full mt-4'>Checkout</Button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
