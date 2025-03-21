// app/menu/page.tsx
import { CategoryList } from '@/components/CategoryList';
import { MenuItem } from '@/components/MenuItem';

interface MenuSection {
  category: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    category: 'Appetizers',
    items: [
      {
        id: '1',
        name: 'Bruschetta',
        description: 'Toasted bread with tomatoes and herbs',
        image: 'https://picsum.photos/seed/bruschetta/200/200',
        price: 8.99,
        options: [
          {
            name: 'Size',
            choices: [
              { name: 'Small', additionalPrice: 0 },
              { name: 'Medium', additionalPrice: 2.0 },
              { name: 'Large', additionalPrice: 4.0 },
            ],
            required: true,
            multiple: false,
          },
          {
            name: 'Extras',
            choices: [
              { name: 'Extra Cheese', additionalPrice: 1.5 },
              { name: 'Bacon', additionalPrice: 2.0 },
            ],
            required: false,
            multiple: true,
          },
        ],
      },
      {
        id: '2',
        name: 'Garlic Bread',
        description: 'Crispy garlic bread with butter',
        image: 'https://picsum.photos/seed/garlicbread/200/200',
        price: 6.99,
        options: [
          {
            name: 'Extras',
            choices: [
              { name: 'Cheese', additionalPrice: 1.0 },
              { name: 'Butter', additionalPrice: 0.5 },
            ],
            required: false,
            multiple: true,
          },
        ],
      },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      {
        id: '3',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato, mozzarella, and basil',
        image: 'https://picsum.photos/seed/pizza/200/200',
        price: 12.99,
        options: [
          {
            name: 'Size',
            choices: [
              { name: 'Small', additionalPrice: 0 },
              { name: 'Medium', additionalPrice: 3.0 },
              { name: 'Large', additionalPrice: 5.0 },
            ],
            required: true,
            multiple: false,
          },
          {
            name: 'Toppings',
            choices: [
              { name: 'Mushrooms', additionalPrice: 1.5 },
              { name: 'Olives', additionalPrice: 1.0 },
              { name: 'Pepperoni', additionalPrice: 2.0 },
            ],
            required: false,
            multiple: true,
          },
        ],
      },
      {
        id: '4',
        name: 'Grilled Chicken',
        description: 'Juicy grilled chicken breast with herbs',
        image: 'https://picsum.photos/seed/chicken/200/200',
        price: 14.99,
        options: [
          {
            name: 'Side Dish',
            choices: [
              { name: 'Fries', additionalPrice: 2.0 },
              { name: 'Salad', additionalPrice: 2.5 },
              { name: 'Steamed Vegetables', additionalPrice: 3.0 },
            ],
            required: true,
            multiple: true,
          },
        ],
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        id: '5',
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with fudge frosting',
        image: 'https://picsum.photos/seed/chocolatecake/200/200',
        price: 7.99,
        options: [
          {
            name: 'Extras',
            choices: [
              { name: 'Whipped Cream', additionalPrice: 1.0 },
              { name: 'Vanilla Ice Cream', additionalPrice: 2.0 },
            ],
            required: false,
            multiple: true,
          },
        ],
      },
      {
        id: '6',
        name: 'Fruit Salad',
        description: 'Fresh seasonal fruits with a honey drizzle',
        image: 'https://picsum.photos/seed/fruitsalad/200/200',
        price: 5.99,
      },
    ],
  },
];

export default function Menu() {
  const categories = menuItems.map((section) => section.category);

  return (
    <div className='container mx-auto p-6'>
      <CategoryList
        categories={categories}
        className='sticky top-0 bg-background z-1'
      />

      <div className='mt-4'>
        {menuItems.map((section) => (
          <section
            key={section.category}
            id={section.category.toLowerCase()}
            className='mb-12 scroll-mt-20 w-full overflow-hidden'
          >
            <h2 className='text-2xl font-bold mb-6'>{section.category}</h2>
            <div className='flex flex-col gap-4 w-full'>
              {section.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
