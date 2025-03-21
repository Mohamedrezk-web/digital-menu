// components/category-list.tsx
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

interface CategoryListProps {
  categories: string[];
  className?: string;
}

export function CategoryList({ categories, className }: CategoryListProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Scroll to the active category in the CategoryList
  const scrollToActiveCategory = (category: string) => {
    const activeButton = buttonRefs.current[category];
    const container = containerRef.current;

    if (activeButton && container) {
      const containerWidth = container.offsetWidth;
      const buttonOffsetLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;

      // Calculate the scroll position to center the active button
      const scrollTo = buttonOffsetLeft - containerWidth / 2 + buttonWidth / 2;

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  // Handle manual category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(category.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // IntersectionObserver to detect active category
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px', // Adjust this value as needed
        threshold: 0.1,
      }
    );

    // Observe all category sections
    categories.forEach((category) => {
      const element = document.getElementById(category.toLowerCase());
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      categories.forEach((category) => {
        const element = document.getElementById(category.toLowerCase());
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [categories]);

  // Scroll the CategoryList when the active category changes
  useEffect(() => {
    scrollToActiveCategory(activeCategory);
  }, [activeCategory]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex gap-4 overflow-x-auto py-4 scrollbar-hide ',
        className
      )}
    >
      {categories.map((category) => (
        <div key={category} className='relative'>
          <Button
            ref={(el) => {
              buttonRefs.current[category] = el;
            }}
            onClick={() => handleCategoryClick(category)}
            variant='ghost'
            className={cn(
              'shrink-0 px-2 py-1 text-sm font-medium transition-colors',
              activeCategory === category.toLowerCase()
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {category}
          </Button>
          {activeCategory === category.toLowerCase() && (
            <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-white' />
          )}
        </div>
      ))}
    </div>
  );
}
